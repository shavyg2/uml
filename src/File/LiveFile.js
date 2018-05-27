"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var File_1 = require("./File");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var rxjs_2 = require("rxjs");
var fs_1 = require("fs");
var Watcher_1 = require("./Watcher");
var replace_ext_1 = __importDefault(require("replace-ext"));
var node_plantuml_1 = __importDefault(require("node-plantuml"));
var autobind_decorator_1 = __importDefault(require("autobind-decorator"));
var glob_1 = __importDefault(require("glob"));
var util_1 = require("util");
var Queue_1 = require("../Queue");
var path_1 = __importDefault(require("path"));
var UMLFile = /** @class */ (function () {
    function UMLFile() {
    }
    UMLFile._Watch = function (file_path) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var once, watcher, fileDeleted, fileChange, children_observables_array, files, file, _a, children_observables, parent, final;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        once = rxjs_1.of(file_path);
                        watcher = Watcher_1.Watcher.GetWatcher(file_path);
                        fileDeleted = rxjs_1.fromEvent(watcher, "unlink");
                        fileChange = rxjs_1.fromEvent(watcher, "change");
                        children_observables_array = [rxjs_1.from([])];
                        files = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, File_1.File.Create(file_path)];
                    case 2:
                        file = _b.sent();
                        files = file.getDependencies();
                        return [4 /*yield*/, Promise.all(files.map(function (file) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._Watch(file)];
                                });
                            }); }))];
                    case 3:
                        children_observables_array = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 5:
                        children_observables = rxjs_2.merge.apply(void 0, children_observables_array).pipe(operators_1.takeUntil(fileChange.pipe(operators_1.take(1))))
                            .pipe(operators_1.tap(function (child) {
                            //console.log("children ",file_path);
                        }));
                        parent = fileChange.pipe(operators_1.debounceTime(500), operators_1.switchMap(function () {
                            //console.log("switching")
                            return rxjs_2.merge(once, rxjs_1.from(_this._Watch(file_path)).pipe(operators_1.mergeAll()));
                        })).pipe(operators_1.takeUntil(fileDeleted));
                        final = rxjs_2.merge(parent, children_observables).pipe(operators_1.mapTo(file_path));
                        return [2 /*return*/, final];
                }
            });
        });
    };
    UMLFile.Watch = function (file_path) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var files;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, util_1.promisify(glob_1.default)(file_path)];
                    case 1:
                        files = _a.sent();
                        return [2 /*return*/, Promise.all(files.map(function (file) { return __awaiter(_this, void 0, void 0, function () {
                                var observable, final;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this._Watch(file)];
                                        case 1:
                                            observable = _a.sent();
                                            final = rxjs_2.merge(rxjs_1.of(file), observable);
                                            return [2 /*return*/, final];
                                    }
                                });
                            }); }))];
                }
            });
        });
    };
    Object.defineProperty(UMLFile, "queue_size", {
        set: function (value) {
            value = Math.floor(value);
            this.queue.size = value;
        },
        enumerable: true,
        configurable: true
    });
    UMLFile.Compile = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.queue.push(function () {
                    var options = {
                        include: path_1.default.dirname(file)
                    };
                    return new Promise(function (r, j) {
                        var from = node_plantuml_1.default.generate(file, options).out;
                        var to = fs_1.createWriteStream(replace_ext_1.default(file, ".png"));
                        to.once("open", function () {
                            console.log("Compiling:", file);
                        });
                        to.once("close", function () {
                            console.log("Generated:", file);
                            r();
                        });
                        from.pipe(to);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    UMLFile.queue = new Queue_1.Queue();
    __decorate([
        autobind_decorator_1.default
    ], UMLFile, "Compile", null);
    return UMLFile;
}());
exports.UMLFile = UMLFile;
//# sourceMappingURL=LiveFile.js.map