"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoRequestMiddleware = void 0;
var InfoRequestMiddleware = /** @class */ (function () {
    function InfoRequestMiddleware() {
    }
    InfoRequestMiddleware.prototype.execute = function (req, res, next) {
        console.log("Request Info: ".concat(req.method, " ").concat(req.originalUrl));
        next();
    };
    return InfoRequestMiddleware;
}());
var infoRequestMiddleware = new InfoRequestMiddleware();
exports.infoRequestMiddleware = infoRequestMiddleware;
