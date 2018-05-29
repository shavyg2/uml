

import memoizee from "memoizee-decorator"
import { File } from "./file";
import { isAbsolute, resolve } from "path";




export class FileSystem {


    private files:File[]=[]

    @memoizee
    getFile(path:string){

        if(!isAbsolute(path)){
            return this.getFile(resolve(path))
        }
        
        let file = new File(path);
        this.files.push(file)
        return file
    }


    forEach(predicate){
        this.files.forEach(predicate);
    }
}