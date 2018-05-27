"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var minimist_1 = __importDefault(require("minimist"));
function arg_exist(has, arg) {
    var isgood = false;
    has.forEach(function (has) {
        var i = -1;
        if (~(i = arg.indexOf(has))) {
            isgood = true;
            arg.splice(i, 1);
        }
    });
    return isgood;
}
function unknownArgs(args) {
    var unknown = args.filter(function (arg) { return /-{1,}[a-z]{1,}/i.test(arg); });
    if (unknown.length) {
        throw new Error("unknown arg(s) " + unknown.join(" "));
    }
}
var Application = /** @class */ (function () {
    function Application(args) {
        this.args = args;
    }
    Object.defineProperty(Application.prototype, "parsed", {
        get: function () {
            return minimist_1.default(this.args);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Application.prototype, "minimalist", {
        get: function () {
            return this.check(this.args.slice(0));
        },
        enumerable: true,
        configurable: true
    });
    Application.prototype.check = function (args) {
        var watch = arg_exist(["-w", "--watch"], args);
        unknownArgs(args);
        return {
            watch: watch,
            args: args
        };
    };
    return Application;
}());
exports.Application = Application;
//# sourceMappingURL=Argument.js.map