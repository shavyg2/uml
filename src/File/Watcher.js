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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2F0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwwRUFBMEM7QUFFMUMsc0RBQWdDO0FBR2hDO0lBQUE7SUFZQSxDQUFDO0lBVFcsNEJBQVUsR0FBbEIsVUFBbUIsSUFBVztRQUMzQixPQUFPLGtCQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFJTSxrQkFBVSxHQUFqQixVQUFrQixJQUFXO1FBQ3pCLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDekMsQ0FBQztJQVJEO1FBREMsNEJBQVE7NkNBR1I7SUFJRDtRQURDLDRCQUFRO21DQUdSO0lBQ0wsY0FBQztDQUFBLEFBWkQsSUFZQztBQVpZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lbW9pemVlIGZyb20gXCJtZW1vaXplZS1kZWNvcmF0b3JcIjtcblxuaW1wb3J0IGNob2tpZGFyIGZyb20gXCJjaG9raWRhclwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5leHBvcnQgY2xhc3MgV2F0Y2hlcntcbiAgICBcbiAgICBAbWVtb2l6ZWVcbiAgICBwcml2YXRlIGdldFdhdGNoZXIoZmlsZTpzdHJpbmcpe1xuICAgICAgIHJldHVybiBjaG9raWRhci53YXRjaChmaWxlKVxuICAgIH1cbiAgICBcblxuICAgIEBtZW1vaXplZVxuICAgIHN0YXRpYyBHZXRXYXRjaGVyKGZpbGU6c3RyaW5nKXtcbiAgICAgICAgcmV0dXJuIG5ldyBXYXRjaGVyKCkuZ2V0V2F0Y2hlcihmaWxlKVxuICAgIH1cbn0iXX0=