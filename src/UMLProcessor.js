"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var File_1 = require("./File/File");
var FileDependency_1 = require("./File/FileDependency");
var UMLProcessor = /** @class */ (function () {
    function UMLProcessor(pattern) {
        this.pattern = pattern;
    }
    UMLProcessor.prototype.process = function () {
        return __awaiter(this, void 0, void 0, function () {
            var file_paths, files, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.pattern.getFiles()];
                    case 1:
                        file_paths = _b.sent();
                        files = file_paths.map(function (file) {
                            return File_1.File.Create(file);
                        });
                        _a = this.processFiles;
                        return [4 /*yield*/, Promise.all(files)];
                    case 2: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    UMLProcessor.prototype.processFiles = function (files) {
        var _this = this;
        return files.map(function (file) {
            return _this.processFile(file);
        });
    };
    UMLProcessor.prototype.processFile = function (file) {
        return new FileDependency_1.FileDependency(file);
    };
    return UMLProcessor;
}());
exports.UMLProcessor = UMLProcessor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVU1MUHJvY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVU1MUHJvY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvQ0FBbUM7QUFDbkMsd0RBQXVEO0FBS3ZEO0lBQ0ksc0JBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFFdkMsQ0FBQztJQUdLLDhCQUFPLEdBQWI7Ozs7OzRCQUNxQixxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBMUMsVUFBVSxHQUFHLFNBQTZCO3dCQUMxQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUk7NEJBQzVCLE9BQU8sV0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDNUIsQ0FBQyxDQUFDLENBQUE7d0JBQ0ssS0FBQSxJQUFJLENBQUMsWUFBWSxDQUFBO3dCQUFDLHFCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUE7NEJBQWpELHNCQUFPLFNBQUEsSUFBSSxHQUFjLFNBQXdCLEVBQUMsRUFBQTs7OztLQUNyRDtJQUdTLG1DQUFZLEdBQXRCLFVBQXVCLEtBQVk7UUFBbkMsaUJBSUM7UUFIRyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ2xCLE9BQU8sS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFUyxrQ0FBVyxHQUFyQixVQUFzQixJQUFTO1FBQzNCLE9BQU8sSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWxlUGF0dGVybiB9IGZyb20gXCIuL0ZpbGUvRmlsZVBhdHRlcm5cIjtcbmltcG9ydCB7IEZpbGUgfSBmcm9tIFwiLi9GaWxlL0ZpbGVcIjtcbmltcG9ydCB7IEZpbGVEZXBlbmRlbmN5IH0gZnJvbSBcIi4vRmlsZS9GaWxlRGVwZW5kZW5jeVwiO1xuXG5cblxuXG5leHBvcnQgY2xhc3MgVU1MUHJvY2Vzc29ye1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGF0dGVybjpGaWxlUGF0dGVybil7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzcygpe1xuICAgICAgICBsZXQgZmlsZV9wYXRocyA9IGF3YWl0IHRoaXMucGF0dGVybi5nZXRGaWxlcygpXG4gICAgICAgIGxldCBmaWxlcyA9IGZpbGVfcGF0aHMubWFwKChmaWxlKT0+e1xuICAgICAgICAgICAgcmV0dXJuIEZpbGUuQ3JlYXRlKGZpbGUpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NGaWxlcyhhd2FpdCBQcm9taXNlLmFsbChmaWxlcykpXG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgcHJvY2Vzc0ZpbGVzKGZpbGVzOkZpbGVbXSl7XG4gICAgICAgIHJldHVybiBmaWxlcy5tYXAoKGZpbGUpPT57XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzRmlsZShmaWxlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBwcm9jZXNzRmlsZShmaWxlOkZpbGUpe1xuICAgICAgICByZXR1cm4gbmV3IEZpbGVEZXBlbmRlbmN5KGZpbGUpXG4gICAgfVxufSJdfQ==