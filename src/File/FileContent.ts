
import fs from "fs";
import { promisify } from "util";



export class OldFileContent{

    constructor(private content:string){

    }


    getContent(){
        return this.content;
    }


    private static async isValidFile(file_path:string){
        try{
            let stat = await promisify(fs.stat)(file_path).catch((e)=>{throw e})
            return !stat.isDirectory()
        }catch{
            console.log(`warning can't find file ${file_path}`)
            return false;
        }
    }


    static async Create(file_path:string){
        let content:string;
        if(!await this.isValidFile(file_path)){
            content = "";
        }else{
            content= await  promisify(fs.readFile)(file_path,"utf8")
        }


        return new OldFileContent(content)
    }
}