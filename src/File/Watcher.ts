import memoizee from "memoizee-decorator";

import chokidar from "chokidar";
import fs from "fs";

export class Watcher{
    
    @memoizee
    private getWatcher(file:string){
       return chokidar.watch(file)
    }
    

    @memoizee
    static GetWatcher(file:string){
        return new Watcher().getWatcher(file)
    }
}