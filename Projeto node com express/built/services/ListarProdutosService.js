"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarProdutosService = void 0;
var ProdutosRepository_js_1 = require("../repositories/ProdutosRepository.js");
var ListarProdutosService = /** @class */ (function () {
    function ListarProdutosService() {
    }
    ListarProdutosService.prototype.execute = function () {
        return ProdutosRepository_js_1.produtosRepository.listar();
    };
    return ListarProdutosService;
}());
;
var listarProdutosService = new ListarProdutosService();
exports.listarProdutosService = listarProdutosService;
