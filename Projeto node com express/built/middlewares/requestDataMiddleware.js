"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestDataMiddleware = void 0;
var RequestDataMiddleware = /** @class */ (function () {
    function RequestDataMiddleware() {
    }
    RequestDataMiddleware.prototype.execute = function (req, res, next) {
        var dataAtual = new Date();
        var options = {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        console.log('Request data: ' + dataAtual.toLocaleString('pt-BR', options));
        next();
    };
    return RequestDataMiddleware;
}());
var requestDataMiddleware = new RequestDataMiddleware();
exports.requestDataMiddleware = requestDataMiddleware;
