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
var Argument_1 = require("./Argument");
var LiveFile_1 = require("../src/File/LiveFile");
var chokidar_1 = __importDefault(require("chokidar"));
var glob_1 = __importDefault(require("glob"));
var util_1 = require("util");
Main();
function Main() {
    return __awaiter(this, void 0, void 0, function () {
        var app, watch, args;
        return __generator(this, function (_a) {
            app = new Argument_1.Application(process.argv.slice(2)).minimalist;
            watch = app.watch, args = app.args;
            if (watch) {
                console.log("watch application");
                Watch(args);
            }
            else {
                Match(args);
            }
            return [2 /*return*/];
        });
    });
}
function Watch(args) {
    var _this = this;
    var watcher = chokidar_1.default.watch(args, {
        ignoreInitial: false
    });
    watcher.on("add", function (file) { return __awaiter(_this, void 0, void 0, function () {
        var o;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, LiveFile_1.UMLFile.Watch(file)];
                case 1:
                    o = _a.sent();
                    o.forEach(function (o) {
                        o.subscribe(function (file) {
                            LiveFile_1.UMLFile.Compile(file);
                        });
                    });
                    return [2 /*return*/];
            }
        });
    }); });
}
function Match(args) {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(args.map(function (arg) {
                        return util_1.promisify(glob_1.default)(arg);
                    }))];
                case 1:
                    files = (_a.sent())
                        .reduce(function (a, b) {
                        return a.concat(b);
                    }, []);
                    files.forEach(function (file) {
                        LiveFile_1.UMLFile.Compile(file);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXlDO0FBQ3pDLGlEQUErQztBQUMvQyxzREFBZ0M7QUFDaEMsOENBQXdCO0FBQ3hCLDZCQUFpQztBQUdqQyxJQUFJLEVBQUUsQ0FBQTtBQUNOOzs7O1lBQ1EsR0FBRyxHQUFHLElBQUksc0JBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUN2RCxLQUFLLEdBQVMsR0FBRyxNQUFaLEVBQUMsSUFBSSxHQUFJLEdBQUcsS0FBUCxDQUFRO1lBQ3ZCLElBQUcsS0FBSyxFQUFDO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBRWQ7aUJBQUk7Z0JBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7Ozs7Q0FDSjtBQUlELGVBQWUsSUFBYTtJQUE1QixpQkFhQztJQVpHLElBQUksT0FBTyxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQztRQUM5QixhQUFhLEVBQUMsS0FBSztLQUN0QixDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBQyxVQUFPLElBQUk7Ozs7d0JBQ2pCLHFCQUFNLGtCQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFBOztvQkFBN0IsQ0FBQyxHQUFHLFNBQXlCO29CQUNqQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzt3QkFDUCxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTs0QkFDWixrQkFBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDekIsQ0FBQyxDQUFDLENBQUE7b0JBQ04sQ0FBQyxDQUFDLENBQUE7Ozs7U0FDSixDQUFDLENBQUE7QUFDTixDQUFDO0FBR0QsZUFBcUIsSUFBYTs7Ozs7d0JBQ2pCLHFCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7d0JBQ3ZDLE9BQU8sZ0JBQVMsQ0FBQyxjQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDL0IsQ0FBQyxDQUFDLENBQUMsRUFBQTs7b0JBRkMsS0FBSyxHQUFHLENBQUMsU0FFVixDQUFDO3lCQUNILE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBQyxDQUFDO3dCQUVSLE9BQVcsQ0FBQyxRQUFJLENBQUMsRUFBRTtvQkFFdkIsQ0FBQyxFQUFDLEVBQWMsQ0FBQztvQkFFakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7d0JBQ2Qsa0JBQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ3pCLENBQUMsQ0FBQyxDQUFBOzs7OztDQUNMIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tIFwiLi9Bcmd1bWVudFwiO1xuaW1wb3J0IHsgVU1MRmlsZSB9IGZyb20gXCIuLi9zcmMvRmlsZS9MaXZlRmlsZVwiO1xuaW1wb3J0IGNob2tpZGFyIGZyb20gXCJjaG9raWRhclwiO1xuaW1wb3J0IGdsb2IgZnJvbSBcImdsb2JcIjtcbmltcG9ydCB7IHByb21pc2lmeSB9IGZyb20gXCJ1dGlsXCI7XG5cblxuTWFpbigpXG5hc3luYyBmdW5jdGlvbiBNYWluKCl7XG4gICAgbGV0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbihwcm9jZXNzLmFyZ3Yuc2xpY2UoMikpLm1pbmltYWxpc3Q7XG4gICAgbGV0IHt3YXRjaCxhcmdzfSA9IGFwcDtcbiAgICBpZih3YXRjaCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2F0Y2ggYXBwbGljYXRpb25cIik7XG4gICAgICAgIFdhdGNoKGFyZ3MpXG4gICAgICAgIFxuICAgIH1lbHNle1xuICAgICAgICBNYXRjaChhcmdzKTtcbiAgICB9XG59XG5cblxuXG5mdW5jdGlvbiBXYXRjaChhcmdzOnN0cmluZ1tdKXtcbiAgICBsZXQgd2F0Y2hlciA9IGNob2tpZGFyLndhdGNoKGFyZ3Mse1xuICAgICAgICBpZ25vcmVJbml0aWFsOmZhbHNlXG4gICAgfSk7XG5cbiAgICB3YXRjaGVyLm9uKFwiYWRkXCIsYXN5bmMgKGZpbGUpPT57XG4gICAgICAgbGV0IG8gPSBhd2FpdCBVTUxGaWxlLldhdGNoKGZpbGUpXG4gICAgICAgby5mb3JFYWNoKG89PntcbiAgICAgICAgICAgby5zdWJzY3JpYmUoZmlsZT0+e1xuICAgICAgICAgICAgICAgVU1MRmlsZS5Db21waWxlKGZpbGUpXG4gICAgICAgICAgIH0pXG4gICAgICAgfSlcbiAgICB9KVxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIE1hdGNoKGFyZ3M6c3RyaW5nW10pe1xuICAgIGxldCBmaWxlcyA9IChhd2FpdCBQcm9taXNlLmFsbChhcmdzLm1hcChhcmc9PntcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeShnbG9iKShhcmcpXG4gICAgfSkpKVxuICAgIC5yZWR1Y2UoKGEsYik9PntcblxuICAgICAgICByZXR1cm4gWy4uLmEsLi4uYl07XG5cbiAgICB9LFtdIGFzIHN0cmluZ1tdKVxuXG4gICAgZmlsZXMuZm9yRWFjaChmaWxlPT57XG4gICAgICAgIFVNTEZpbGUuQ29tcGlsZShmaWxlKVxuICAgIH0pXG59Il19