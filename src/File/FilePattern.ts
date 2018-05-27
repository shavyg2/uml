import fs, { promises } from "fs";
import glob from "glob";
import path from "path";



export abstract class FilePattern{

    static Create(pattern:string|RegExp){
        if(typeof pattern==="string"){
            return new StringFilePattern(pattern)
        }else{
            return new RegexFilePattern(pattern)
        }
    }

    abstract getFiles():Promise<string[]>
}




export class StringFilePattern extends FilePattern {

    constructor(private pattern:string){
        super()
    }
    getFiles(): Promise<string[]> {
        return new Promise<string[]>((r,j)=>{
            glob(this.pattern,(err,files)=>{
                if(err){j(err)}
                else {r(files)}
            })
        })
    }
}


export class RegexFilePattern extends FilePattern {

    constructor(private pattern:RegExp){
        super()
    }
    async getFiles(): Promise<string[]> {
        const files = await new Promise<string[]>((r,j)=>{
            glob(path.join(__dirname,"**/*"),(err,files)=>{
                if(err){j(err)}
                else {r(files)}
            })
        })

        return files.filter(file=>{
           return this.pattern.test(file)
        })
    }
}