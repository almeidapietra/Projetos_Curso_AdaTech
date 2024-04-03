"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseTimeMiddleware = void 0;
var ResponseTimeMiddleware = /** @class */ (function () {
    function ResponseTimeMiddleware() {
    }
    ResponseTimeMiddleware.prototype.executeBefore = function (req, res, next) {
        console.time('Response time');
        next();
    };
    ResponseTimeMiddleware.prototype.executeAfter = function (req, res, next) {
        console.timeEnd('Response time');
        next();
    };
    return ResponseTimeMiddleware;
}());
var responseTimeMiddleware = new ResponseTimeMiddleware();
exports.responseTimeMiddleware = responseTimeMiddleware;
