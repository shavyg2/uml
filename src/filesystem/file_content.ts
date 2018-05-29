import { File } from "./file";
import { promisify } from "util";
import { readFile } from "fs";





export class FileContent{

    constructor(private size:number){

    }

    store:[File,Promise<string>][] = [];


    async getContent(file:File){

        if(this.inCache(file)){
           let cached =  this.inCache(file);

           if(!cached){
               throw new Error("item not cached")
           }
           
           let content =  cached[1];
           return content as Promise<string>;
        }


        let content = promisify(readFile)(file.getPath(),"utf8")
        this.addToCache(file,content)
        return content;
    }


    invalidate(file:File){
        let  item = this.inCache(file)
        if(item !==undefined){
            let position = this.store.indexOf(item)
            this.store.splice(position,1);
        }
    }


    private addToCache(file:File,promise:Promise<string>){
        this.store.push([file,promise]);

        if(this.store.length >= this.size){
            this.store.pop();
        }
    }

    private inCache(file:File){
        let result = this.store.find(([_file,promise])=>{

            return file.getPath() === _file.getPath()
        })


        return result;
    }

}