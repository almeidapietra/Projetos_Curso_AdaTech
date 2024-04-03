"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
var AppError = /** @class */ (function () {
    function AppError(mensagem, status) {
        if (status === void 0) { status = 400; }
        this.mensagem = mensagem;
        this.status = status;
    }
    return AppError;
}());
exports.AppError = AppError;
