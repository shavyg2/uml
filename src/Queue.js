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
                return this.stack[0];
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
        var current = stack.then(function () {
            return async_function();
        });
        this.stack[this.last] = current;
    };
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map