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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var FileContent = /** @class */ (function () {
    function FileContent(content) {
        this.content = content;
    }
    FileContent.prototype.getContent = function () {
        return this.content;
    };
    FileContent.Create = function (file_path) {
        return __awaiter(this, void 0, void 0, function () {
            var content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (r, j) {
                            fs_1.default.readFile(file_path, function (err, content) {
                                if (err) {
                                    j(err);
                                }
                                else {
                                    r(content.toString());
                                }
                            });
                        })];
                    case 1:
                        content = _a.sent();
                        return [2 /*return*/, new FileContent(content)];
                }
            });
        });
    };
    return FileContent;
}());
exports.FileContent = FileContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUNvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWxlQ29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMENBQW9CO0FBSXBCO0lBRUkscUJBQW9CLE9BQWM7UUFBZCxZQUFPLEdBQVAsT0FBTyxDQUFPO0lBRWxDLENBQUM7SUFHRCxnQ0FBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFHWSxrQkFBTSxHQUFuQixVQUFvQixTQUFnQjs7Ozs7NEJBQ2xCLHFCQUFNLElBQUksT0FBTyxDQUFTLFVBQUMsQ0FBQyxFQUFDLENBQUM7NEJBRXhDLFlBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDLFVBQUMsR0FBRyxFQUFDLE9BQU87Z0NBQzlCLElBQUcsR0FBRyxFQUFDO29DQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQ0FBQztxQ0FDWDtvQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7aUNBQUM7NEJBQy9CLENBQUMsQ0FBQyxDQUFBO3dCQUNOLENBQUMsQ0FBQyxFQUFBOzt3QkFORSxPQUFPLEdBQUcsU0FNWjt3QkFFRixzQkFBTyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBQTs7OztLQUNsQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5cblxuZXhwb3J0IGNsYXNzIEZpbGVDb250ZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZW50OnN0cmluZyl7XG5cbiAgICB9XG5cblxuICAgIGdldENvbnRlbnQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBhc3luYyBDcmVhdGUoZmlsZV9wYXRoOnN0cmluZyl7XG4gICAgICAgIGxldCBjb250ZW50ID0gYXdhaXQgbmV3IFByb21pc2U8c3RyaW5nPigocixqKT0+e1xuXG4gICAgICAgICAgICBmcy5yZWFkRmlsZShmaWxlX3BhdGgsKGVycixjb250ZW50KT0+e1xuICAgICAgICAgICAgICAgIGlmKGVycil7aihlcnIpfVxuICAgICAgICAgICAgICAgIGVsc2V7cihjb250ZW50LnRvU3RyaW5nKCkpfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbmV3IEZpbGVDb250ZW50KGNvbnRlbnQpXG4gICAgfVxufSJdfQ==