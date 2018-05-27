import { File } from "./File";





let content = `

!include uml/src/UMLprocessor.uml

class Application{

    - UMLProcessor processor
    - processFile(File file)
    + process(FilePattern pattern)
    
}



Application --o UMLProcessor

`


describe("File",()=>{

    it("should be able to get dependencies",()=>{
        let file = File.CreateFromContent(content)
        let children = file.getDependencies()
        expect(children[0]).toBe("uml/src/UMLprocessor.uml")
    })
})