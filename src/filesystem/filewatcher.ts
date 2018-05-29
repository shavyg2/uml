

import memoizee from "memoizee-decorator"
import chokidar from "chokidar";



let watcher = chokidar.watch();

export class FileWatcher{

    @memoizee
    watch(path:string){
        watcher.add(path)
    }


    getWatcher(){
        return watcher;
    }
}