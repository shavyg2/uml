import { UMLProcessor } from "../UMLProcessor";
import { OldFile } from "./File";
import {fromEvent, from,of, Observable,Subject, interval,fromEventPattern} from "rxjs"
import {takeUntil,mapTo,tap, mergeMap, switchMap, mergeAll, map, take, debounceTime, publish, skipUntil, filter, share, switchMapTo, auditTime, throttleTime, audit} from "rxjs/operators"
import {merge} from "rxjs"
import chokidar from "chokidar";
import { watch, createWriteStream, fstat } from "fs";
import memoizee from "memoizee-decorator"
import { Watcher } from "./Watcher";
import { FilePattern } from "./FilePattern";
import { FileDependency } from "./FileDependency";
import replace from "replace-ext";
import plantuml from "node-plantuml";
import bind from "autobind-decorator"
import glob from "glob";
import { callbackify, promisify } from "util";
import { Queue } from "../Queue";
import fs from "fs";

import path from "path";


let time = [0]

let streams = new Map();
let lastTime=500;
export class UMLFile{

    @memoizee
    private static getChange(){
        let watcher = Watcher.chokidarWatcher()
        return fromEvent<string>(watcher,"change").pipe(share())

    }

    @memoizee
    private static getChangeEvent(file_path){
        let watcher = fs.watch(file_path)
        return fromEvent(watcher as any,"change").pipe(tap(x=>{
            time.push(Date.now());

            let [start,end] = time.slice(-2)

           let diff=end-start;

           let max = Math.min(100,diff)
           let min = Math.max(30,max)

           lastTime= min;
           
            
        }),share(),audit(value=>{
            return interval(lastTime).pipe(take(1))
        }))

    }

    @memoizee
    private static getDeleteEvent(){
        let watcher = Watcher.chokidarWatcher()
        return fromEvent<string>(watcher,"unlink").pipe(share())
    }

    private static async ListenToChildren(file_path):Promise<Observable<string>>{

        let fileChange = this.getChangeEvent(file_path);
        
        
        let file = await OldFile.Create(file_path);
        let files = file.getDependencies();

        let result = (()=>{

            try{
                let children = files.map(file=>{
                    return this.Watch(file)
                })
                return merge(...children)
            }catch(e){
                return of<string>()
            }
        })().pipe(takeUntil(fileChange));

        let change = fileChange.pipe(mergeMap(_=>{
            let reset = from(this.ListenToChildren(file_path)).pipe(mergeAll(),takeUntil(fileChange))
            return reset;
        }))

        return merge(result,change);
    }

    private static _Watch(file_path:string){

        
        let fileDeleted = this.getDeleteEvent()
        let fileChange = this.getChangeEvent(file_path).pipe(mapTo(file_path));

        let children = from(this.ListenToChildren(file_path)).pipe(mergeAll())

        //TODO: Remove if not needed
        // let parent = fileChange.pipe(switchMap(()=>{
        //     console.log("need to refresh children")
        //     let redo = from(this.ListenToChildren(file_path)).pipe(mergeAll())
        //     return redo
        // })).pipe(takeUntil(fileDeleted))

        
        
        let final =  merge(fileChange.pipe(tap(file=>{
            //console.log("from file",file)
        })),/*parent,*/children.pipe(tap(file=>{
            //console.log("from children",file,"to",file_path)
        }),mapTo(file_path)))

        return  final;
    }

    @memoizee
    static Watch(file_path:string):Observable<string>{
        let file = path.resolve(file_path)
        let result = this._Watch(file);
        let observable = result
        let final = observable.pipe(share());
        return final;
    }
    
    
    private static queue = new Queue()
    
    static set queue_size(value:number){
        value = Math.floor(value);
        this.queue.size = value
    }
    
    
    
    
    @bind
    static async Compile(file:string){
        
        
        this.queue.push(()=>{
            
            
            let options = {
                include:path.dirname(file)
            }
            
            return new Promise((r,j)=>{
                file = path.resolve(file);
                let from = plantuml.generate(file,options).out;
                let to = createWriteStream(replace(file,".png"))
                
                if(streams.has(file)){
                    let previous = streams.get(file)
                    try{
                        previous.destroy();
                        
                    }catch(e){
                        console.error("error destroying stream")
                        console.dir(previous,{depth:2})
                        process.exit(1);
                    }
                }
                
                streams.set(file,from);
                
                to.once("open",()=>{
                    console.log("Compiling:",file);
                })
                
                to.once("close",()=>{
                    console.log("Generated:",file)
                    streams.delete(file)
                    r()
                })
                
                from.pipe(to);
            })
        })
        
    }
    
    
    

}

