import { FilePattern } from "./File/FilePattern";
import { File } from "./File/File";
import { FileDependency } from "./File/FileDependency";




export class UMLProcessor{
    constructor(private pattern:FilePattern){
        
    }


    async process(){
        let file_paths = await this.pattern.getFiles()
        let files = file_paths.map((file)=>{
            return File.Create(file)
        })
        return this.processFiles(await Promise.all(files))
    }


    protected processFiles(files:File[]){
        return files.map((file)=>{
            return this.processFile(file)
        })
    }

    protected processFile(file:File){
        return new FileDependency(file)
    }
}