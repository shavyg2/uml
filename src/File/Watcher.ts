import memoizee from "memoizee-decorator";



import chokidar from "chokidar";
import fs from "fs";


export class Watcher{
    
    @memoizee
    private getWatcher(file:string){

       let watcher = Watcher.chokidarWatcher()
       watcher.add(file);
       return watcher;
    }
    
    @memoizee
    static AddWatch(file:string){
        return new Watcher().getWatcher(file)
    }

    @memoizee
    static chokidarWatcher(){
        return chokidar.watch(null,{
            awaitWriteFinish:true
        });
    }
}