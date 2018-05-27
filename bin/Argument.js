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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJndW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcmd1bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLHNEQUFnQztBQUtoQyxtQkFBbUIsR0FBWSxFQUFDLEdBQVk7SUFDeEMsSUFBSSxNQUFNLEdBQUMsS0FBSyxDQUFDO0lBQ2pCLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDWCxJQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDO1lBQ3ZCLE1BQU0sR0FBQyxJQUFJLENBQUM7WUFDWixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtTQUNsQjtJQUNMLENBQUMsQ0FBQyxDQUFBO0lBRUYsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUlELHFCQUFxQixJQUFhO0lBQzlCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQTtJQUMzRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUM7UUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFrQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUE7S0FDekQ7QUFDTCxDQUFDO0FBRUQ7SUFFSSxxQkFBb0IsSUFBYTtRQUFiLFNBQUksR0FBSixJQUFJLENBQVM7SUFFakMsQ0FBQztJQUVELHNCQUFZLCtCQUFNO2FBQWxCO1lBQ0ksT0FBTyxrQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5QixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLG1DQUFVO2FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN6QyxDQUFDOzs7T0FBQTtJQUVPLDJCQUFLLEdBQWIsVUFBYyxJQUFhO1FBRXZCLElBQUksS0FBSyxHQUFJLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBQyxTQUFTLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUc5QyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsT0FBTztZQUNILEtBQUssT0FBQTtZQUNMLElBQUksTUFBQTtTQUNQLENBQUE7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBtaW5pbWlzdCBmcm9tIFwibWluaW1pc3RcIjtcblxuXG5cblxuZnVuY3Rpb24gYXJnX2V4aXN0KGhhczpzdHJpbmdbXSxhcmc6c3RyaW5nW10pe1xuICAgIGxldCBpc2dvb2Q9ZmFsc2U7XG4gICAgaGFzLmZvckVhY2goaGFzPT57XG4gICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgIGlmKH4oaSA9IGFyZy5pbmRleE9mKGhhcykpKXtcbiAgICAgICAgICAgIGlzZ29vZD10cnVlO1xuICAgICAgICAgICAgYXJnLnNwbGljZShpLDEpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGlzZ29vZDtcbn1cblxuXG5cbmZ1bmN0aW9uIHVua25vd25BcmdzKGFyZ3M6c3RyaW5nW10pe1xuICAgIGxldCB1bmtub3duID0gYXJncy5maWx0ZXIoYXJnPT4vLXsxLH1bYS16XXsxLH0vaS50ZXN0KGFyZykpXG4gICAgaWYodW5rbm93bi5sZW5ndGgpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gYXJnKHMpICR7dW5rbm93bi5qb2luKFwiIFwiKX1gKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9ue1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcmdzOnN0cmluZ1tdKXtcblxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IHBhcnNlZCgpe1xuICAgICAgICByZXR1cm4gbWluaW1pc3QodGhpcy5hcmdzKVxuICAgIH1cbiAgICBcblxuICAgIGdldCBtaW5pbWFsaXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrKHRoaXMuYXJncy5zbGljZSgwKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrKGFyZ3M6c3RyaW5nW10pe1xuXG4gICAgICAgIGxldCB3YXRjaCAgPSBhcmdfZXhpc3QoW1wiLXdcIixcIi0td2F0Y2hcIl0sYXJncyk7XG5cblxuICAgICAgICB1bmtub3duQXJncyhhcmdzKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2F0Y2gsXG4gICAgICAgICAgICBhcmdzXG4gICAgICAgIH1cbiAgICB9XG59Il19