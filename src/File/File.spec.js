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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlsZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBTTlCLElBQUksT0FBTyxHQUFHLGdOQWdCYixDQUFBO0FBR0QsUUFBUSxDQUFDLE1BQU0sRUFBQztJQUVaLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBQztRQUNwQyxJQUFJLElBQUksR0FBRyxXQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDMUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQ3JDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtJQUN4RCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZSB9IGZyb20gXCIuL0ZpbGVcIjtcblxuXG5cblxuXG5sZXQgY29udGVudCA9IGBcblxuIWluY2x1ZGUgdW1sL3NyYy9VTUxwcm9jZXNzb3IudW1sXG5cbmNsYXNzIEFwcGxpY2F0aW9ue1xuXG4gICAgLSBVTUxQcm9jZXNzb3IgcHJvY2Vzc29yXG4gICAgLSBwcm9jZXNzRmlsZShGaWxlIGZpbGUpXG4gICAgKyBwcm9jZXNzKEZpbGVQYXR0ZXJuIHBhdHRlcm4pXG4gICAgXG59XG5cblxuXG5BcHBsaWNhdGlvbiAtLW8gVU1MUHJvY2Vzc29yXG5cbmBcblxuXG5kZXNjcmliZShcIkZpbGVcIiwoKT0+e1xuXG4gICAgaXQoXCJzaG91bGQgYmUgYWJsZSB0byBnZXQgZGVwZW5kZW5jaWVzXCIsKCk9PntcbiAgICAgICAgbGV0IGZpbGUgPSBGaWxlLkNyZWF0ZUZyb21Db250ZW50KGNvbnRlbnQpXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IGZpbGUuZ2V0RGVwZW5kZW5jaWVzKClcbiAgICAgICAgZXhwZWN0KGNoaWxkcmVuWzBdKS50b0JlKFwidW1sL3NyYy9VTUxwcm9jZXNzb3IudW1sXCIpXG4gICAgfSlcbn0pIl19