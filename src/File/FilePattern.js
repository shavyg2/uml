"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var glob_1 = __importDefault(require("glob"));
var path_1 = __importDefault(require("path"));
var FilePattern = /** @class */ (function () {
    function FilePattern() {
    }
    FilePattern.Create = function (pattern) {
        if (typeof pattern === "string") {
            return new StringFilePattern(pattern);
        }
        else {
            return new RegexFilePattern(pattern);
        }
    };
    return FilePattern;
}());
exports.FilePattern = FilePattern;
var StringFilePattern = /** @class */ (function (_super) {
    __extends(StringFilePattern, _super);
    function StringFilePattern(pattern) {
        var _this = _super.call(this) || this;
        _this.pattern = pattern;
        return _this;
    }
    StringFilePattern.prototype.getFiles = function () {
        var _this = this;
        return new Promise(function (r, j) {
            glob_1.default(_this.pattern, function (err, files) {
                if (err) {
                    j(err);
                }
                else {
                    r(files);
                }
            });
        });
    };
    return StringFilePattern;
}(FilePattern));
exports.StringFilePattern = StringFilePattern;
var RegexFilePattern = /** @class */ (function (_super) {
    __extends(RegexFilePattern, _super);
    function RegexFilePattern(pattern) {
        var _this = _super.call(this) || this;
        _this.pattern = pattern;
        return _this;
    }
    RegexFilePattern.prototype.getFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var files;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (r, j) {
                            glob_1.default(path_1.default.join(__dirname, "**/*"), function (err, files) {
                                if (err) {
                                    j(err);
                                }
                                else {
                                    r(files);
                                }
                            });
                        })];
                    case 1:
                        files = _a.sent();
                        return [2 /*return*/, files.filter(function (file) {
                                return _this.pattern.test(file);
                            })];
                }
            });
        });
    };
    return RegexFilePattern;
}(FilePattern));
exports.RegexFilePattern = RegexFilePattern;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVBhdHRlcm4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWxlUGF0dGVybi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhDQUF3QjtBQUN4Qiw4Q0FBd0I7QUFJeEI7SUFBQTtJQVdBLENBQUM7SUFUVSxrQkFBTSxHQUFiLFVBQWMsT0FBcUI7UUFDL0IsSUFBRyxPQUFPLE9BQU8sS0FBRyxRQUFRLEVBQUM7WUFDekIsT0FBTyxJQUFJLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ3hDO2FBQUk7WUFDRCxPQUFPLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDdkM7SUFDTCxDQUFDO0lBR0wsa0JBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhxQixrQ0FBVztBQWdCakM7SUFBdUMscUNBQVc7SUFFOUMsMkJBQW9CLE9BQWM7UUFBbEMsWUFDSSxpQkFBTyxTQUNWO1FBRm1CLGFBQU8sR0FBUCxPQUFPLENBQU87O0lBRWxDLENBQUM7SUFDRCxvQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxPQUFPLElBQUksT0FBTyxDQUFXLFVBQUMsQ0FBQyxFQUFDLENBQUM7WUFDN0IsY0FBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUMsVUFBQyxHQUFHLEVBQUMsS0FBSztnQkFDeEIsSUFBRyxHQUFHLEVBQUM7b0JBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUFDO3FCQUNWO29CQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtpQkFBQztZQUNuQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQWJELENBQXVDLFdBQVcsR0FhakQ7QUFiWSw4Q0FBaUI7QUFnQjlCO0lBQXNDLG9DQUFXO0lBRTdDLDBCQUFvQixPQUFjO1FBQWxDLFlBQ0ksaUJBQU8sU0FDVjtRQUZtQixhQUFPLEdBQVAsT0FBTyxDQUFPOztJQUVsQyxDQUFDO0lBQ0ssbUNBQVEsR0FBZDs7Ozs7OzRCQUNrQixxQkFBTSxJQUFJLE9BQU8sQ0FBVyxVQUFDLENBQUMsRUFBQyxDQUFDOzRCQUMxQyxjQUFJLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsTUFBTSxDQUFDLEVBQUMsVUFBQyxHQUFHLEVBQUMsS0FBSztnQ0FDdkMsSUFBRyxHQUFHLEVBQUM7b0NBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lDQUFDO3FDQUNWO29DQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtpQ0FBQzs0QkFDbkIsQ0FBQyxDQUFDLENBQUE7d0JBQ04sQ0FBQyxDQUFDLEVBQUE7O3dCQUxJLEtBQUssR0FBRyxTQUtaO3dCQUVGLHNCQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJO2dDQUNyQixPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBOzRCQUNqQyxDQUFDLENBQUMsRUFBQTs7OztLQUNMO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBakJELENBQXNDLFdBQVcsR0FpQmhEO0FBakJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcywgeyBwcm9taXNlcyB9IGZyb20gXCJmc1wiO1xuaW1wb3J0IGdsb2IgZnJvbSBcImdsb2JcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmlsZVBhdHRlcm57XG5cbiAgICBzdGF0aWMgQ3JlYXRlKHBhdHRlcm46c3RyaW5nfFJlZ0V4cCl7XG4gICAgICAgIGlmKHR5cGVvZiBwYXR0ZXJuPT09XCJzdHJpbmdcIil7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0ZpbGVQYXR0ZXJuKHBhdHRlcm4pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdleEZpbGVQYXR0ZXJuKHBhdHRlcm4pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhYnN0cmFjdCBnZXRGaWxlcygpOlByb21pc2U8c3RyaW5nW10+XG59XG5cblxuXG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdGaWxlUGF0dGVybiBleHRlbmRzIEZpbGVQYXR0ZXJuIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGF0dGVybjpzdHJpbmcpe1xuICAgICAgICBzdXBlcigpXG4gICAgfVxuICAgIGdldEZpbGVzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZ1tdPigocixqKT0+e1xuICAgICAgICAgICAgZ2xvYih0aGlzLnBhdHRlcm4sKGVycixmaWxlcyk9PntcbiAgICAgICAgICAgICAgICBpZihlcnIpe2ooZXJyKX1cbiAgICAgICAgICAgICAgICBlbHNlIHtyKGZpbGVzKX1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBSZWdleEZpbGVQYXR0ZXJuIGV4dGVuZHMgRmlsZVBhdHRlcm4ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXR0ZXJuOlJlZ0V4cCl7XG4gICAgICAgIHN1cGVyKClcbiAgICB9XG4gICAgYXN5bmMgZ2V0RmlsZXMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZ1tdPigocixqKT0+e1xuICAgICAgICAgICAgZ2xvYihwYXRoLmpvaW4oX19kaXJuYW1lLFwiKiovKlwiKSwoZXJyLGZpbGVzKT0+e1xuICAgICAgICAgICAgICAgIGlmKGVycil7aihlcnIpfVxuICAgICAgICAgICAgICAgIGVsc2Uge3IoZmlsZXMpfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gZmlsZXMuZmlsdGVyKGZpbGU9PntcbiAgICAgICAgICAgcmV0dXJuIHRoaXMucGF0dGVybi50ZXN0KGZpbGUpXG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==