

import minimist from "minimist";




function arg_exist(has:string[],arg:string[]){
    let isgood=false;
    has.forEach(has=>{
        let i = -1;
        if(~(i = arg.indexOf(has))){
            isgood=true;
            arg.splice(i,1)
        }
    })

    return isgood;
}



function unknownArgs(args:string[]){
    let unknown = args.filter(arg=>/-{1,}[a-z]{1,}/i.test(arg))
    if(unknown.length){
        throw new Error(`unknown arg(s) ${unknown.join(" ")}`)
    }
}

export class Application{

    constructor(private args:string[]){

    }

    private get parsed(){
        return minimist(this.args)
    }
    

    get minimalist(){
        return this.check(this.args.slice(0))
    }

    private check(args:string[]){

        let watch  = arg_exist(["-w","--watch"],args);


        unknownArgs(args);

        return {
            watch,
            args
        }
    }
}