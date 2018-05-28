



export class Queue{

    private stack:any[] = [];
    private robin=0;
    private last=-1;

    size:number=1;
    // set size(value){
    //     if(this.stack.length<value){
    //         while(this.stack.length<value){
    //             this.stack.push(Promise.resolve())
    //         }
    //     }else if(this.stack.length>value){
    //         this.stack.splice(value)
    //     }
    // }

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


    private running=false;

    private tasks:any[] = []

    private add(async_func){
        this.tasks.push(async_func)
        this.run();
    }

    private inprogress:any[] = [];

    run(){
        if(this.inprogress.length < this.size ){
            
            let task = this.tasks.pop()
            if(!task){
                return;
            }
            let done = Promise.resolve(task());
            this.inprogress.push(done);
            done.then(()=>{
                let position = this.inprogress.indexOf(done);
                if(~position){
                    this.inprogress.splice(position,1)
                }
                this.run();
            })
            
        }
    }

    push(async_function){
        let skip = true;
        if(skip){
            this.add(async_function);
            return;
        }

        let stack = this.plate;
        let current = stack.then(async ()=>{
            await async_function()
            let position = this.stack.indexOf(current);
            if(~position){
                this.stack.splice(position,1,Promise.resolve())
                console.log("clean memory");
            }
        })
        this.stack[this.last]=current;
    }

}