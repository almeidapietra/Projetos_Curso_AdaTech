"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirProdutosService = void 0;
var ProdutosRepository_js_1 = require("../repositories/ProdutosRepository.js");
var AppError_js_1 = require("../errors/AppError.js");
var ExcluirProdutosService = /** @class */ (function () {
    function ExcluirProdutosService() {
    }
    ExcluirProdutosService.prototype.execute = function (id) {
        var produto = ProdutosRepository_js_1.produtosRepository.buscar(id);
        if (!produto) {
            throw new AppError_js_1.AppError('Produto não encontrado', 404);
        }
        return ProdutosRepository_js_1.produtosRepository.excluir(id);
    };
    return ExcluirProdutosService;
}());
;
var excluirProdutosService = new ExcluirProdutosService();
exports.excluirProdutosService = excluirProdutosService;
