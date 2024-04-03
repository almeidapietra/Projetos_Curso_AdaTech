"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarProdutosService = void 0;
var ProdutosRepository_js_1 = require("../repositories/ProdutosRepository.js");
var CadastrarProdutosService = /** @class */ (function () {
    function CadastrarProdutosService() {
    }
    CadastrarProdutosService.prototype.execute = function (produto) {
        var novoProduto = ProdutosRepository_js_1.produtosRepository.cadastrar(produto);
        return novoProduto;
    };
    return CadastrarProdutosService;
}());
;
var cadastrarProdutosService = new CadastrarProdutosService();
exports.cadastrarProdutosService = cadastrarProdutosService;
