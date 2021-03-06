import { FileContent } from "./FileContent";
import uuid from "uuid/v4";
import memoizee from "memoizee-decorator"
import path from "path";


export class File{


    constructor(private file_path:string,private file_content:FileContent){

    }

    @memoizee
    path(){
        if(this.file_path===""){
            return uuid()
        }else{
            return this.file_path
        }
    }


    getDependencies(){
        let lines = this.getContentLines();
        return lines.map((line)=>{
            return line.trim()
        })
        .filter((line)=>{
            return line.match(/^!include/)
        }).map((line)=>{
            return path.join(path.dirname(this.file_path),line.split(" ").splice(1).join(" "))
        })
    }

    private getContentLines(){
        return this.file_content.getContent().split("\n")
    }


    static async Create(file_path:string){
        let content = await FileContent.Create(file_path)
        return new File(file_path,content)
    }

    static CreateFromContent(content:string){
        return new File("",new FileContent(content))
    }
}