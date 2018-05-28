import { UMLProcessor } from "../UMLProcessor";
import { File } from "./File";
import {fromEvent, from,of, Observable,Subject, interval,fromEventPattern} from "rxjs"
import {takeUntil,mapTo,tap, mergeMap, switchMap, mergeAll, map, take, debounceTime, publish, skipUntil, filter, share, switchMapTo} from "rxjs/operators"
import {merge} from "rxjs"
import chokidar from "chokidar";
import { watch, createWriteStream } from "fs";
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

import path from "path";

let store={} as any;
        
let file_count = new Map()
let streams = new Map();
export class UMLFile{

    @memoizee
    private static getChange(){
        let watcher = Watcher.chokidarWatcher()
        return fromEvent<string>(watcher,"change").pipe(share())

    }

    private static getChangeEvent(file_path){
        return this.getChange()
        .pipe(filter((file)=>{
            return path.resolve(file_path)!==path.resolve(file) 
        }))
    }

    @memoizee
    private static getDeleteEvent(){
        let watcher = Watcher.chokidarWatcher()
        return fromEvent<string>(watcher,"unlink").pipe(share())
    }

    private static async ListenToChildren(file_path):Promise<Observable<string>>{

        let fileChange = this.getChangeEvent(file_path);
        
        
        let file = await File.Create(file_path);
        let files = file.getDependencies();

        let result = (function(){

                try{
                    let children = files.map(file=>{
                        return this.Watch(file)
                })
                
                
                return merge(...children).pipe(mapTo(file_path))
            }catch(e){
                return of<string>()
                
            }
        })().pipe(takeUntil(fileChange));

        let change = fileChange.pipe(switchMap(()=>{
            let next = from(this.ListenToChildren(file_path)).pipe(mergeAll())
            return merge(of(file_path),next)
        }))




        return merge(result,change).pipe(mapTo(file_path));

        
    }


   


    

    private static _Watch(file_path:string){

        Watcher.AddWatch(file_path);
        let fileDeleted = this.getDeleteEvent()
        let fileChange = this.getChangeEvent(file_path).pipe(debounceTime(1000),tap(file=>{
            console.log("change",file);
        }));


        let children = from(this.ListenToChildren(file_path)).pipe(mergeAll(),mapTo(file_path))


    
        
        let parent = fileChange.pipe(switchMap(()=>{
            let redo = from(this.ListenToChildren(file_path)).pipe(mergeAll())
            return redo
        })).pipe(takeUntil(fileDeleted))

        
        
        let final =  fileChange//,/*parent,children*/)

        return  final.pipe(tap(file_path=>{
            let _file= path.resolve(file_path);
        store[_file] = store[_file] || 0;
        store[_file]++
        console.log(_file,store[_file]);
        }))
    }

    @memoizee
    static Watch(file_path:string):Observable<string>{
        let file = path.resolve(file_path)
        let result = this._Watch(file);
        let observable = result.pipe(tap(x=>{
            console.log(x)
        }))
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
                        
                    }catch{
                        console.log(previous)
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

