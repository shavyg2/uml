"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var memoizee_decorator_1 = __importDefault(require("memoizee-decorator"));
var chokidar_1 = __importDefault(require("chokidar"));
var Watcher = /** @class */ (function () {
    function Watcher() {
    }
    Watcher.prototype.getWatcher = function (file) {
        return chokidar_1.default.watch(file);
    };
    Watcher.GetWatcher = function (file) {
        return new Watcher().getWatcher(file);
    };
    __decorate([
        memoizee_decorator_1.default
    ], Watcher.prototype, "getWatcher", null);
    __decorate([
        memoizee_decorator_1.default
    ], Watcher, "GetWatcher", null);
    return Watcher;
}());
exports.Watcher = Watcher;
//# sourceMappingURL=Watcher.js.map