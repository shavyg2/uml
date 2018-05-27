"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var File_1 = require("./File");
var content = "\n\n!include uml/src/UMLprocessor.uml\n\nclass Application{\n\n    - UMLProcessor processor\n    - processFile(File file)\n    + process(FilePattern pattern)\n    \n}\n\n\n\nApplication --o UMLProcessor\n\n";
describe("File", function () {
    it("should be able to get dependencies", function () {
        var file = File_1.File.CreateFromContent(content);
        var children = file.getDependencies();
        expect(children[0]).toBe("uml/src/UMLprocessor.uml");
    });
});
//# sourceMappingURL=File.spec.js.map