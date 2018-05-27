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
var FileContent_1 = require("./FileContent");
var v4_1 = __importDefault(require("uuid/v4"));
var memoizee_decorator_1 = __importDefault(require("memoizee-decorator"));
var File = /** @class */ (function () {
    function File(file_path, file_content) {
        this.file_path = file_path;
        this.file_content = file_content;
    }
    File.prototype.path = function () {
        if (this.file_path === "") {
            return v4_1.default();
        }
        else {
            return this.file_path;
        }
    };
    File.prototype.getDependencies = function () {
        var lines = this.getContentLines();
        return lines.map(function (line) {
            return line.trim();
        })
            .filter(function (line) {
            return line.match(/^!include/);
        }).map(function (line) {
            return line.split(" ").splice(1).join(" ");
        });
    };
    File.prototype.getContentLines = function () {
        return this.file_content.getContent().split("\n");
    };
    File.Create = function (file_path) {
        return __awaiter(this, void 0, void 0, function () {
            var content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, FileContent_1.FileContent.Create(file_path)];
                    case 1:
                        content = _a.sent();
                        return [2 /*return*/, new File(file_path, content)];
                }
            });
        });
    };
    File.CreateFromContent = function (content) {
        return new File("", new FileContent_1.FileContent(content));
    };
    __decorate([
        memoizee_decorator_1.default
    ], File.prototype, "path", null);
    return File;
}());
exports.File = File;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1QywrQ0FBMkI7QUFDM0IsMEVBQXlDO0FBSXpDO0lBR0ksY0FBb0IsU0FBZ0IsRUFBUyxZQUF3QjtRQUFqRCxjQUFTLEdBQVQsU0FBUyxDQUFPO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQVk7SUFFckUsQ0FBQztJQUdELG1CQUFJLEdBQUo7UUFDSSxJQUFHLElBQUksQ0FBQyxTQUFTLEtBQUcsRUFBRSxFQUFDO1lBQ25CLE9BQU8sWUFBSSxFQUFFLENBQUE7U0FDaEI7YUFBSTtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtTQUN4QjtJQUNMLENBQUM7SUFHRCw4QkFBZSxHQUFmO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ25DLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUk7WUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDdEIsQ0FBQyxDQUFDO2FBQ0QsTUFBTSxDQUFDLFVBQUMsSUFBSTtZQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNsQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDOUMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU8sOEJBQWUsR0FBdkI7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFHWSxXQUFNLEdBQW5CLFVBQW9CLFNBQWdCOzs7Ozs0QkFDbEIscUJBQU0seUJBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUE3QyxPQUFPLEdBQUcsU0FBbUM7d0JBQ2pELHNCQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBQyxPQUFPLENBQUMsRUFBQTs7OztLQUNyQztJQUVNLHNCQUFpQixHQUF4QixVQUF5QixPQUFjO1FBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUkseUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFqQ0Q7UUFEQyw0QkFBUTtvQ0FPUjtJQTRCTCxXQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWxlQ29udGVudCB9IGZyb20gXCIuL0ZpbGVDb250ZW50XCI7XG5pbXBvcnQgdXVpZCBmcm9tIFwidXVpZC92NFwiO1xuaW1wb3J0IG1lbW9pemVlIGZyb20gXCJtZW1vaXplZS1kZWNvcmF0b3JcIlxuXG5cblxuZXhwb3J0IGNsYXNzIEZpbGV7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZV9wYXRoOnN0cmluZyxwcml2YXRlIGZpbGVfY29udGVudDpGaWxlQ29udGVudCl7XG5cbiAgICB9XG5cbiAgICBAbWVtb2l6ZWVcbiAgICBwYXRoKCl7XG4gICAgICAgIGlmKHRoaXMuZmlsZV9wYXRoPT09XCJcIil7XG4gICAgICAgICAgICByZXR1cm4gdXVpZCgpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsZV9wYXRoXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGdldERlcGVuZGVuY2llcygpe1xuICAgICAgICBsZXQgbGluZXMgPSB0aGlzLmdldENvbnRlbnRMaW5lcygpO1xuICAgICAgICByZXR1cm4gbGluZXMubWFwKChsaW5lKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGxpbmUudHJpbSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoKGxpbmUpPT57XG4gICAgICAgICAgICByZXR1cm4gbGluZS5tYXRjaCgvXiFpbmNsdWRlLylcbiAgICAgICAgfSkubWFwKChsaW5lKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGxpbmUuc3BsaXQoXCIgXCIpLnNwbGljZSgxKS5qb2luKFwiIFwiKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29udGVudExpbmVzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVfY29udGVudC5nZXRDb250ZW50KCkuc3BsaXQoXCJcXG5cIilcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhc3luYyBDcmVhdGUoZmlsZV9wYXRoOnN0cmluZyl7XG4gICAgICAgIGxldCBjb250ZW50ID0gYXdhaXQgRmlsZUNvbnRlbnQuQ3JlYXRlKGZpbGVfcGF0aClcbiAgICAgICAgcmV0dXJuIG5ldyBGaWxlKGZpbGVfcGF0aCxjb250ZW50KVxuICAgIH1cblxuICAgIHN0YXRpYyBDcmVhdGVGcm9tQ29udGVudChjb250ZW50OnN0cmluZyl7XG4gICAgICAgIHJldHVybiBuZXcgRmlsZShcIlwiLG5ldyBGaWxlQ29udGVudChjb250ZW50KSlcbiAgICB9XG59Il19