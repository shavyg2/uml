"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Argument_1 = require("./Argument");
describe("Argument", function () {
    it("should be able to detect args", function () {
        var application = new Argument_1.Application("uml/**/*.ts -w".split(" "));
        var args = application.minimalist;
        expect(args.watch).toBeTruthy();
    });
    it("should be able to detech not real args", function () {
        expect(function () {
            new Argument_1.Application("--unknown command".split(" ")).minimalist;
        }).toThrow();
    });
});
//# sourceMappingURL=Argument.spec.js.map