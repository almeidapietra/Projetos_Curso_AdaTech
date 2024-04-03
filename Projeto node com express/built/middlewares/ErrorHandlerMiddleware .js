"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
var AppError_js_1 = require("../errors/AppError.js");
var ErrorHandlerMiddleware = /** @class */ (function () {
    function ErrorHandlerMiddleware() {
    }
    ErrorHandlerMiddleware.prototype.execute = function (err, req, res, netx) {
        if (err) {
            if (err instanceof AppError_js_1.AppError) {
                return res.status(err.status).send({ mensagem: err.mensagem });
            }
            console.error(err);
            return res.status(500).send({ mensagem: 'Erro interno do servidor' });
        }
        netx();
    };
    return ErrorHandlerMiddleware;
}());
var errorHandlerMiddleware = new ErrorHandlerMiddleware();
exports.errorHandlerMiddleware = errorHandlerMiddleware;
/* Tratar o erro:
1. verificar se o erro é do tipo AppError
2. se for AppError: Deesestruturar para apresentar a mensagem com o status informado
3. se nao for AppError: logar o erro no console e lançar um erro padrão com status 500*/ 
