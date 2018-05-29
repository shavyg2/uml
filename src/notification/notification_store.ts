



export class Notification{


    private store:any[]=[]

    isNotified(receiver:any){
        return ~this.store.indexOf(receiver)
    }

    received(receiver:any){
        if(!this.isNotified(receiver)){
            this.store.push(receiver)
        }
    }


    static Create(){
        return new Notification();
    }
}