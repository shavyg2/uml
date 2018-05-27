



export class Queue{

    private stack:any[] = [];
    private robin=0;
    private last=-1;


    set size(value){
        if(this.stack.length<value){
            while(this.stack.length<value){
                this.stack.push(Promise.resolve())
            }
        }else if(this.stack.length>value){
            this.stack.splice(value)
        }
    }

    private get plate(){
        if(this.stack.length === 0){
            this.stack.push(Promise.resolve())
            return this.stack[0]
        }else{
            if(this.robin >= this.stack.length){
                this.robin=0
                this.last=-1;
            }
            this.last++;
            return this.stack[this.robin++]
        }
    }

    private get lastPlate(){
        if(this.last>=0)
        return this.stack[this.last]
        else return null;
    }

    push(async_function){
        let stack = this.plate;
        let current = stack.then(()=>{
            return async_function()
        })
        this.stack[this.last]=current;
    }

}