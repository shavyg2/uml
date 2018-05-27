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
                    var from = node_plantuml_1.default.generate(file).out;
                    var to = fs_1.createWriteStream(replace_ext_1.default(file, ".png"));
                    from.pipe(to);
                    return new Promise(function (r, j) {
                        to.once("end", r);
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
UMLFile.queue_size = 1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZUZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMaXZlRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0JBQThCO0FBQzlCLDZCQUFzRjtBQUN0Riw0Q0FBOEg7QUFDOUgsNkJBQTBCO0FBRTFCLHlCQUE4QztBQUU5QyxxQ0FBb0M7QUFHcEMsNERBQWtDO0FBQ2xDLGdFQUFxQztBQUNyQywwRUFBcUM7QUFDckMsOENBQXdCO0FBQ3hCLDZCQUE4QztBQUM5QyxrQ0FBaUM7QUFJakM7SUFBQTtJQTJGQSxDQUFDO0lBekZ3QixjQUFNLEdBQTNCLFVBQTRCLFNBQWdCOzs7Ozs7O3dCQUNwQyxJQUFJLEdBQUcsU0FBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3dCQUVwQixPQUFPLEdBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7d0JBRXZDLFdBQVcsR0FBRyxnQkFBUyxDQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsQ0FBQTt3QkFDekMsVUFBVSxHQUFHLGdCQUFTLENBQUMsT0FBTyxFQUFDLFFBQVEsQ0FBQyxDQUFBO3dCQUd4QywwQkFBMEIsR0FBUyxDQUFDLFdBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO3dCQUM3QyxLQUFLLEdBQVksRUFBRSxDQUFBOzs7O3dCQUdSLHFCQUFNLFdBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFuQyxJQUFJLEdBQUcsU0FBNEI7d0JBQ3ZDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7d0JBRUQscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQU8sSUFBSTs7b0NBQ2hFLHNCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUM7O2lDQUM1QixDQUFDLENBQUMsRUFBQTs7d0JBRkgsMEJBQTBCLEdBQUcsU0FFMUIsQ0FBQTs7Ozs7O3dCQU1ILG9CQUFvQixHQUFHLFlBQUssZUFBSSwwQkFBMEIsRUFBRSxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUN4RyxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsS0FBSzs0QkFDWCxxQ0FBcUM7d0JBQ3pDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBR0MsTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsd0JBQVksQ0FBQyxHQUFHLENBQUMsRUFBQyxxQkFBUyxDQUFDOzRCQUVyRCwwQkFBMEI7NEJBQzFCLE9BQU8sWUFBSyxDQUFDLElBQUksRUFBQyxXQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBUSxFQUFFLENBQUMsQ0FBQyxDQUFBO3dCQUNwRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7d0JBSTVCLEtBQUssR0FBSSxZQUFLLENBQUMsTUFBTSxFQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFFdkUsc0JBQVEsS0FBSyxFQUFBOzs7O0tBQ2hCO0lBR1ksYUFBSyxHQUFsQixVQUFtQixTQUFnQjs7Ozs7OzRCQUNuQixxQkFBTSxnQkFBUyxDQUFDLGNBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFBOzt3QkFBeEMsS0FBSyxHQUFHLFNBQWdDO3dCQUM1QyxzQkFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBTSxJQUFJOzs7O2dEQUVsQixxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFBOzs0Q0FBcEMsVUFBVSxHQUFHLFNBQXVCOzRDQUNwQyxLQUFLLEdBQUcsWUFBSyxDQUFDLFNBQUUsQ0FBQyxJQUFJLENBQUMsRUFBQyxVQUFVLENBQUMsQ0FBQTs0Q0FDdEMsc0JBQU8sS0FBSyxFQUFDOzs7aUNBRWhCLENBQUMsQ0FBQyxFQUFBOzs7O0tBQ047SUFLRCxzQkFBVyxxQkFBVTthQUFyQixVQUFzQixLQUFZO1lBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQU1ZLGVBQU8sR0FBcEIsVUFBcUIsSUFBVzs7O2dCQUc1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFFWixJQUFJLElBQUksR0FBRyx1QkFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQ3ZDLElBQUksRUFBRSxHQUFHLHNCQUFpQixDQUFDLHFCQUFPLENBQUMsSUFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7b0JBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBQyxDQUFDO3dCQUVuQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQTtvQkFDcEIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQyxDQUFDLENBQUE7Ozs7S0FLTDtJQTVCYyxhQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQTtJQVdsQztRQURDLDRCQUFJO2dDQWtCSjtJQUtMLGNBQUM7Q0FBQSxBQTNGRCxJQTJGQztBQTNGWSwwQkFBTztBQThGcEIsT0FBTyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVTUxQcm9jZXNzb3IgfSBmcm9tIFwiLi4vVU1MUHJvY2Vzc29yXCI7XG5pbXBvcnQgeyBGaWxlIH0gZnJvbSBcIi4vRmlsZVwiO1xuaW1wb3J0IHtmcm9tRXZlbnQsIGZyb20sb2YsIE9ic2VydmFibGUsU3ViamVjdCwgaW50ZXJ2YWwsZnJvbUV2ZW50UGF0dGVybn0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHt0YWtlVW50aWwsbWFwVG8sdGFwLCBtZXJnZU1hcCwgc3dpdGNoTWFwLCBtZXJnZUFsbCwgbWFwLCB0YWtlLCBkZWJvdW5jZVRpbWUsIHB1Ymxpc2gsIHNraXBVbnRpbH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcbmltcG9ydCB7bWVyZ2V9IGZyb20gXCJyeGpzXCJcbmltcG9ydCBjaG9raWRhciBmcm9tIFwiY2hva2lkYXJcIjtcbmltcG9ydCB7IHdhdGNoLCBjcmVhdGVXcml0ZVN0cmVhbSB9IGZyb20gXCJmc1wiO1xuaW1wb3J0IG1lbW9pemVlIGZyb20gXCJtZW1vaXplZS1kZWNvcmF0b3JcIlxuaW1wb3J0IHsgV2F0Y2hlciB9IGZyb20gXCIuL1dhdGNoZXJcIjtcbmltcG9ydCB7IEZpbGVQYXR0ZXJuIH0gZnJvbSBcIi4vRmlsZVBhdHRlcm5cIjtcbmltcG9ydCB7IEZpbGVEZXBlbmRlbmN5IH0gZnJvbSBcIi4vRmlsZURlcGVuZGVuY3lcIjtcbmltcG9ydCByZXBsYWNlIGZyb20gXCJyZXBsYWNlLWV4dFwiO1xuaW1wb3J0IHBsYW50dW1sIGZyb20gXCJub2RlLXBsYW50dW1sXCI7XG5pbXBvcnQgYmluZCBmcm9tIFwiYXV0b2JpbmQtZGVjb3JhdG9yXCJcbmltcG9ydCBnbG9iIGZyb20gXCJnbG9iXCI7XG5pbXBvcnQgeyBjYWxsYmFja2lmeSwgcHJvbWlzaWZ5IH0gZnJvbSBcInV0aWxcIjtcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSBcIi4uL1F1ZXVlXCI7XG5cblxuXG5leHBvcnQgY2xhc3MgVU1MRmlsZXtcblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIF9XYXRjaChmaWxlX3BhdGg6c3RyaW5nKTpQcm9taXNlPE9ic2VydmFibGU8c3RyaW5nPj57XG4gICAgICAgIGxldCBvbmNlID0gb2YoZmlsZV9wYXRoKVxuXG4gICAgICAgIGxldCB3YXRjaGVyID0gV2F0Y2hlci5HZXRXYXRjaGVyKGZpbGVfcGF0aClcblxuICAgICAgICBsZXQgZmlsZURlbGV0ZWQgPSBmcm9tRXZlbnQod2F0Y2hlcixcInVubGlua1wiKVxuICAgICAgICBsZXQgZmlsZUNoYW5nZSA9IGZyb21FdmVudCh3YXRjaGVyLFwiY2hhbmdlXCIpXG5cblxuICAgICAgICBsZXQgY2hpbGRyZW5fb2JzZXJ2YWJsZXNfYXJyYXk6YW55W10gPSBbZnJvbShbXSldXG4gICAgICAgIGxldCBmaWxlczpzdHJpbmdbXSA9IFtdXG4gICAgICAgIHRyeXtcblxuICAgICAgICAgICAgbGV0IGZpbGUgPSBhd2FpdCBGaWxlLkNyZWF0ZShmaWxlX3BhdGgpXG4gICAgICAgICAgICBmaWxlcyA9IGZpbGUuZ2V0RGVwZW5kZW5jaWVzKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2hpbGRyZW5fb2JzZXJ2YWJsZXNfYXJyYXkgPSBhd2FpdCBQcm9taXNlLmFsbChmaWxlcy5tYXAoYXN5bmMgKGZpbGUpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX1dhdGNoKGZpbGUpO1xuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1jYXRjaHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIFxuICAgICAgICBsZXQgY2hpbGRyZW5fb2JzZXJ2YWJsZXMgPSBtZXJnZSguLi5jaGlsZHJlbl9vYnNlcnZhYmxlc19hcnJheSkucGlwZSh0YWtlVW50aWwoZmlsZUNoYW5nZS5waXBlKHRha2UoMSkpKSlcbiAgICAgICAgLnBpcGUodGFwKGNoaWxkPT57XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2hpbGRyZW4gXCIsZmlsZV9wYXRoKTtcbiAgICAgICAgfSkpXG5cblxuICAgICAgICBsZXQgcGFyZW50ID0gZmlsZUNoYW5nZS5waXBlKGRlYm91bmNlVGltZSg1MDApLHN3aXRjaE1hcCgoKT0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic3dpdGNoaW5nXCIpXG4gICAgICAgICAgICByZXR1cm4gbWVyZ2Uob25jZSxmcm9tKHRoaXMuX1dhdGNoKGZpbGVfcGF0aCkpLnBpcGUobWVyZ2VBbGwoKSkpXG4gICAgICAgIH0pKS5waXBlKHRha2VVbnRpbChmaWxlRGVsZXRlZCkpXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBsZXQgZmluYWwgPSAgbWVyZ2UocGFyZW50LGNoaWxkcmVuX29ic2VydmFibGVzKS5waXBlKG1hcFRvKGZpbGVfcGF0aCkpO1xuXG4gICAgICAgIHJldHVybiAgZmluYWxcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhc3luYyBXYXRjaChmaWxlX3BhdGg6c3RyaW5nKXtcbiAgICAgICAgbGV0IGZpbGVzID0gYXdhaXQgcHJvbWlzaWZ5KGdsb2IpKGZpbGVfcGF0aClcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGZpbGVzLm1hcChhc3luYyBmaWxlPT57XG4gICAgICAgXG4gICAgICAgICAgICBsZXQgb2JzZXJ2YWJsZSA9IGF3YWl0IHRoaXMuX1dhdGNoKGZpbGUpXG4gICAgICAgICAgICBsZXQgZmluYWwgPSBtZXJnZShvZihmaWxlKSxvYnNlcnZhYmxlKVxuICAgICAgICAgICAgcmV0dXJuIGZpbmFsO1xuICAgICAgICAgICBcbiAgICAgICAgfSkpXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHN0YXRpYyBxdWV1ZSA9IG5ldyBRdWV1ZSgpXG5cbiAgICBzdGF0aWMgc2V0IHF1ZXVlX3NpemUodmFsdWU6bnVtYmVyKXtcbiAgICAgICAgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKTtcbiAgICAgICAgdGhpcy5xdWV1ZS5zaXplID0gdmFsdWVcbiAgICB9XG5cblxuXG5cbiAgICBAYmluZFxuICAgIHN0YXRpYyBhc3luYyBDb21waWxlKGZpbGU6c3RyaW5nKXtcblxuXG4gICAgICAgIHRoaXMucXVldWUucHVzaCgoKT0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZnJvbSA9IHBsYW50dW1sLmdlbmVyYXRlKGZpbGUpLm91dDtcbiAgICAgICAgICAgIGxldCB0byA9IGNyZWF0ZVdyaXRlU3RyZWFtKHJlcGxhY2UoZmlsZSxcIi5wbmdcIikpXG4gICAgICAgICAgICBmcm9tLnBpcGUodG8pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyLGopPT57XG4gICAgXG4gICAgICAgICAgICAgICAgdG8ub25jZShcImVuZFwiLHIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG5cblxuXG4gICAgfVxuXG5cblxuXG59XG5cblxuVU1MRmlsZS5xdWV1ZV9zaXplID0gMTsiXX0=