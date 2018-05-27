
import fs from "fs";



export class FileContent{

    constructor(private content:string){

    }


    getContent(){
        return this.content;
    }


    static async Create(file_path:string){
        let content = await new Promise<string>((r,j)=>{

            fs.readFile(file_path,(err,content)=>{
                if(err){j(err)}
                else{r(content.toString())}
            })
        })

        return new FileContent(content)
    }
}