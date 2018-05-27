import { Application } from "./Argument";




describe("Argument",()=>{


    
    it("should be able to detect args",()=>{
        let application = new Application("uml/**/*.ts -w".split(" "))
        
        let args  = application.minimalist;

        expect(args.watch).toBeTruthy()
    })


    it("should be able to detech not real args",()=>{

        expect(function(){
            new Application("--unknown command".split(" ")).minimalist
        }).toThrow()
    })
})