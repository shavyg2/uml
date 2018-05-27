import { UMLProcessor } from "../src/UMLProcessor";
import { FilePattern } from "../src/File/FilePattern";
import { FileDependency } from "../src/File/FileDependency";






describe("UMLProcessor",()=>{

    let processor:UMLProcessor
    let filedependency:FileDependency[]

    beforeAll(async ()=>{
        let pattern = FilePattern.Create("**/Dog.uml")
        processor = new UMLProcessor(pattern)
        filedependency = await processor.process()
    })


    it("should be able to get dependencies",async ()=>{
        let files = await filedependency[0].getDependencies()
        expect(files.length).toBe(4)
    })
})