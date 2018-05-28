#!/usr/bin/env node

import { Application } from "./Argument";
import { UMLFile } from "../src/File/LiveFile";
import chokidar from "chokidar";
import glob from "glob";
import { promisify } from "util";
import os from "os";
import {debounceTime} from "rxjs/operators"
import path from "path";

Main()
async function Main(){
    let app = new Application(process.argv.slice(2)).minimalist;
    let {watch,args} = app;

    let concurrent = Math.max(1,Math.floor(os.cpus().length * 4 / 4))
    UMLFile.queue_size = concurrent;

    console.log("Concurrency",concurrent)


    if(watch){
        console.log("watch application");
        Watch(args)
        
    }else{
        Match(args);
    }
}


function Watch(args:string[]){
    
    let parameter = args.length===1?args[0]:args
    let watcher = chokidar.watch(parameter,{
        ignoreInitial:false
    });
    
    watcher.on("add",async (file)=>{
        file = path.resolve(file);
        


        let o = await UMLFile.Watch(file)
      
        o.subscribe(file=>{
            UMLFile.Compile(path.resolve(file))
        })
    })
}


async function Match(args:string[]){
    let files = (await Promise.all(args.map(arg=>{
        return promisify(glob)(arg)
    })))
    .reduce((a,b)=>{

        return [...a,...b];

    },[] as string[])

    files.forEach(file=>{
        UMLFile.Compile(file)
    })
}