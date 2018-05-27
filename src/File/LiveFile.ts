import { UMLProcessor } from "../UMLProcessor";
import { File } from "./File";
import {fromEvent, from,of, Observable,Subject, interval,fromEventPattern} from "rxjs"
import {takeUntil,mapTo,tap, mergeMap, switchMap, mergeAll, map, take, debounceTime, publish, skipUntil} from "rxjs/operators"
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



export class UMLFile{

    private static async _Watch(file_path:string):Promise<Observable<string>>{
        let once = of(file_path)

        let watcher = Watcher.GetWatcher(file_path)

        let fileDeleted = fromEvent(watcher,"unlink")
        let fileChange = fromEvent(watcher,"change")


        let children_observables_array:any[] = [from([])]
        let files:string[] = []
        try{

            let file = await File.Create(file_path)
            files = file.getDependencies()
            
            children_observables_array = await Promise.all(files.map(async (file)=>{
                return this._Watch(file);
            }))
        }catch{
            
        }
        
    
        let children_observables = merge(...children_observables_array).pipe(takeUntil(fileChange.pipe(take(1))))
        .pipe(tap(child=>{
            //console.log("children ",file_path);
        }))


        let parent = fileChange.pipe(debounceTime(500),switchMap(()=>{
            
            //console.log("switching")
            return merge(once,from(this._Watch(file_path)).pipe(mergeAll()))
        })).pipe(takeUntil(fileDeleted))

        
        
        let final =  merge(parent,children_observables).pipe(mapTo(file_path));

        return  final
    }


    static async Watch(file_path:string){
        let files = await promisify(glob)(file_path)
        return Promise.all(files.map(async file=>{
       
            let observable = await this._Watch(file)
            let final = merge(of(file),observable)
            return final;
           
        }))
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
                let from = plantuml.generate(file,options).out;
                let to = createWriteStream(replace(file,".png"))
                
                to.once("open",()=>{
                    console.log("Compiling:",file)
                })
                
                to.once("close",()=>{
                    console.log("Generated:",file)
                    r()
                })

                from.pipe(to);
            })
        })

    }




}