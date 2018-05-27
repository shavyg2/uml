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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJndW1lbnQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFyZ3VtZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBeUM7QUFLekMsUUFBUSxDQUFDLFVBQVUsRUFBQztJQUloQixFQUFFLENBQUMsK0JBQStCLEVBQUM7UUFDL0IsSUFBSSxXQUFXLEdBQUcsSUFBSSxzQkFBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBRTlELElBQUksSUFBSSxHQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFFbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUdGLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBQztRQUV4QyxNQUFNLENBQUM7WUFDSCxJQUFJLHNCQUFXLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFBO1FBQzlELENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2hCLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gXCIuL0FyZ3VtZW50XCI7XG5cblxuXG5cbmRlc2NyaWJlKFwiQXJndW1lbnRcIiwoKT0+e1xuXG5cbiAgICBcbiAgICBpdChcInNob3VsZCBiZSBhYmxlIHRvIGRldGVjdCBhcmdzXCIsKCk9PntcbiAgICAgICAgbGV0IGFwcGxpY2F0aW9uID0gbmV3IEFwcGxpY2F0aW9uKFwidW1sLyoqLyoudHMgLXdcIi5zcGxpdChcIiBcIikpXG4gICAgICAgIFxuICAgICAgICBsZXQgYXJncyAgPSBhcHBsaWNhdGlvbi5taW5pbWFsaXN0O1xuXG4gICAgICAgIGV4cGVjdChhcmdzLndhdGNoKS50b0JlVHJ1dGh5KClcbiAgICB9KVxuXG5cbiAgICBpdChcInNob3VsZCBiZSBhYmxlIHRvIGRldGVjaCBub3QgcmVhbCBhcmdzXCIsKCk9PntcblxuICAgICAgICBleHBlY3QoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIG5ldyBBcHBsaWNhdGlvbihcIi0tdW5rbm93biBjb21tYW5kXCIuc3BsaXQoXCIgXCIpKS5taW5pbWFsaXN0XG4gICAgICAgIH0pLnRvVGhyb3coKVxuICAgIH0pXG59KSJdfQ==