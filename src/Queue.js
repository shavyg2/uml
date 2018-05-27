"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.stack = [];
        this.robin = 0;
        this.last = -1;
    }
    Object.defineProperty(Queue.prototype, "size", {
        set: function (value) {
            if (this.stack.length < value) {
                while (this.stack.length < value) {
                    this.stack.push(Promise.resolve());
                }
            }
            else if (this.stack.length > value) {
                this.stack.splice(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "plate", {
        get: function () {
            if (this.stack.length === 0) {
                this.stack.push(Promise.resolve());
            }
            else {
                if (this.robin >= this.stack.length) {
                    this.robin = 0;
                    this.last = -1;
                }
                this.last++;
                return this.stack[this.robin++];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "lastPlate", {
        get: function () {
            if (this.last >= 0)
                return this.stack[this.last];
            else
                return null;
        },
        enumerable: true,
        configurable: true
    });
    Queue.prototype.push = function (async_function) {
        var stack = this.plate;
        var current = stack.then(function () { async_function(); });
        this.stack[this.last] = current;
    };
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJRdWV1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBO0lBQUE7UUFFWSxVQUFLLEdBQVMsRUFBRSxDQUFDO1FBQ2pCLFVBQUssR0FBQyxDQUFDLENBQUM7UUFDUixTQUFJLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFzQ3BCLENBQUM7SUFuQ0csc0JBQUksdUJBQUk7YUFBUixVQUFTLEtBQUs7WUFDVixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLEtBQUssRUFBQztnQkFDdkIsT0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxLQUFLLEVBQUM7b0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO2lCQUNyQzthQUNKO2lCQUFLLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsS0FBSyxFQUFDO2dCQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUMzQjtRQUNMLENBQUM7OztPQUFBO0lBRUQsc0JBQVksd0JBQUs7YUFBakI7WUFDSSxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztnQkFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7YUFDckM7aUJBQUk7Z0JBQ0QsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDO29CQUMvQixJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQTtvQkFDWixJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoQjtnQkFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO2FBQ2xDO1FBQ0wsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSw0QkFBUzthQUFyQjtZQUNJLElBQUcsSUFBSSxDQUFDLElBQUksSUFBRSxDQUFDO2dCQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7O2dCQUN2QixPQUFPLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVELG9CQUFJLEdBQUosVUFBSyxjQUFjO1FBQ2YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQUssY0FBYyxFQUFFLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBQyxPQUFPLENBQUM7SUFDbEMsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5leHBvcnQgY2xhc3MgUXVldWV7XG5cbiAgICBwcml2YXRlIHN0YWNrOmFueVtdID0gW107XG4gICAgcHJpdmF0ZSByb2Jpbj0wO1xuICAgIHByaXZhdGUgbGFzdD0tMTtcblxuXG4gICAgc2V0IHNpemUodmFsdWUpe1xuICAgICAgICBpZih0aGlzLnN0YWNrLmxlbmd0aDx2YWx1ZSl7XG4gICAgICAgICAgICB3aGlsZSh0aGlzLnN0YWNrLmxlbmd0aDx2YWx1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKFByb21pc2UucmVzb2x2ZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YWNrLmxlbmd0aD52YWx1ZSl7XG4gICAgICAgICAgICB0aGlzLnN0YWNrLnNwbGljZSh2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IHBsYXRlKCl7XG4gICAgICAgIGlmKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChQcm9taXNlLnJlc29sdmUoKSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZih0aGlzLnJvYmluID49IHRoaXMuc3RhY2subGVuZ3RoKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJvYmluPTBcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3Q9LTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxhc3QrKztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YWNrW3RoaXMucm9iaW4rK11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGxhc3RQbGF0ZSgpe1xuICAgICAgICBpZih0aGlzLmxhc3Q+PTApXG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrW3RoaXMubGFzdF1cbiAgICAgICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdXNoKGFzeW5jX2Z1bmN0aW9uKXtcbiAgICAgICAgbGV0IHN0YWNrID0gdGhpcy5wbGF0ZTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBzdGFjay50aGVuKCgpPT57YXN5bmNfZnVuY3Rpb24oKX0pXG4gICAgICAgIHRoaXMuc3RhY2tbdGhpcy5sYXN0XT1jdXJyZW50O1xuICAgIH1cblxufSJdfQ==