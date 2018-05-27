import { UMLFile } from "../src/File/LiveFile";
import { debounceTime } from "rxjs/operators";
import { interval } from "rxjs";

interval(1000).subscribe(()=>{
    let mem = process.memoryUsage();
    console.log(`${Math.round(mem.heapUsed/mem.heapTotal *10000)/100}% =${mem.heapUsed}/${mem.heapTotal}`)
})



UMLFile.Watch("test/**/*.uml").then(result=>{
    result.forEach(r=>{
        r.pipe(debounceTime(500)).subscribe(file=>{
            //console.log("compiling",file)
            UMLFile.Compile(file);
        })
    })
})