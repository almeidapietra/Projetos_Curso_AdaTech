"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarProdutosService = void 0;
var ProdutosRepository_js_1 = require("../repositories/ProdutosRepository.js");
var AppError_js_1 = require("../errors/AppError.js");
var EditarProdutosService = /** @class */ (function () {
    function EditarProdutosService() {
    }
    EditarProdutosService.prototype.execute = function (produto) {
        var produtoExistente = ProdutosRepository_js_1.produtosRepository.buscar(produto.id);
        if (!(produto === null || produto === void 0 ? void 0 : produto.nome)) {
            throw new AppError_js_1.AppError('Nome do produto é obrigatório');
        }
        if (!produtoExistente) {
            throw new AppError_js_1.AppError('Produdo não encontrado', 404);
        }
        var produtoEditado = ProdutosRepository_js_1.produtosRepository.editar(produto);
        return produtoEditado;
    };
    return EditarProdutosService;
}());
;
var editarProdutosService = new EditarProdutosService();
exports.editarProdutosService = editarProdutosService;
