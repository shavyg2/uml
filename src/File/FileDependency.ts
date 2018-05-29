import { OldFile } from "./File";


export class FileDependency{

    constructor(private file:OldFile){

    }


    async getDependencies():Promise<string[]>{
        let children = this.file.getDependencies()

        let filesP = children.map((file)=>{
            return OldFile.Create(file)
        })


        let files = await Promise.all(filesP)


        let needsP = files.map((file)=>{
            return new FileDependency(file).getDependencies()
        })


        let needs = await Promise.all(needsP);

        
        let needs_flat = needs.reduce((a,b)=>{
            return [...a,...b]
        },[] as string[])



        return [...children,...needs_flat];
    }
}