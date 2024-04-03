"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarProdutosService = void 0;
var ProdutosRepository_js_1 = require("../repositories/ProdutosRepository.js");
var AppError_js_1 = require("../errors/AppError.js");
var BuscarProdutosService = /** @class */ (function () {
    function BuscarProdutosService() {
    }
    BuscarProdutosService.prototype.execute = function (id) {
        var produto = ProdutosRepository_js_1.produtosRepository.buscar(id);
        if (!produto) {
            throw new AppError_js_1.AppError('Produto não encontrado', 404);
        }
        return produto;
    };
    return BuscarProdutosService;
}());
;
var buscarProdutosService = new BuscarProdutosService();
exports.buscarProdutosService = buscarProdutosService;
