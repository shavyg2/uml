import "source-map-support/register"
import glob from "glob";
import { promisify } from "util";
import chokidar from "chokidar";
import { fromEvent, of } from "rxjs";
import { FileSystem } from "../filesystem/filesystem";
import { File } from "../filesystem/file";
import { Notification } from "../notification/notification_store";
import { FileContent } from "../filesystem/file_content";
import { OldFile } from "../File/File";
import { OldFileContent } from "../File/FileContent";
import { resolve } from "path";
import { PassThrough } from "stream";
import path from "path";
import { UMLFile } from "../File/LiveFile";
import { cpus } from "os";
import { auditTime } from "rxjs/operators";
import {memoizee} from "memoizee-decorator"



let file_system = new FileSystem()
let filecontent = new FileContent(10);
let file_dependencies = new Map<File,string[]>()



export async function Watch(globs:string[]){

    
    let watcher = chokidar.watch(globs,{
        awaitWriteFinish:{
            stabilityThreshold:100,
            pollInterval:50
        }
    })

    fromEvent(watcher,"add").subscribe(async file=>{
        while(typeof file!=="string"){
            file = file[0]
        }




        let File = file_system.getFile(path.resolve(file))
        filecontent.getContent(File);
        await Render(File,Notification.Create(),Notification.Create());
    })


    fromEvent(watcher,"change").subscribe(async file=>{
        while(typeof file!=="string"){
            file = file[0]
        }


        let File = file_system.getFile(file)
        filecontent.invalidate(File);
        let notification = Notification.Create();

        await Render(File,Notification.Create(),Notification.Create());
    })
}



async function Render(file:File,rendered:Notification,updated:Notification){
    if(rendered.isNotified(file))
    return 
    rendered.received(file);



    await UpdateDependencies(file,updated);

    let content = await filecontent.getContent(file)
    UMLFile.Compile(file.getPath())

    let chain = Promise.resolve();

    file_dependencies.forEach((value,parent)=>{

        value = value.map(v=>path.resolve(v))

        let position = value.indexOf(file.getPath());

        if(~position){
            chain = chain.then(()=>{
                return Render(parent,rendered,updated)
            })
        }
    })

    await chain;
    
}


async function UpdateDependencies(file:File,updated:Notification){
    
    if(updated.isNotified(file))
    return
    updated.received(file)

    let content = await filecontent.getContent(file)
    let dependencies = new OldFile(file.getPath(), new OldFileContent(content)).getDependencies().map(file=>{
        return path.resolve(file);
    });

    file_dependencies.set(file,dependencies)
}






