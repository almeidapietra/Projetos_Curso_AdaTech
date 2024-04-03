"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProdutosRepository_produtos;
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtosRepository = void 0;
var uuid_1 = require("uuid");
var ProdutosRepository = /** @class */ (function () {
    function ProdutosRepository() {
        _ProdutosRepository_produtos.set(this, [
            {
                "id": "15e16148-9201-4e35-994e-cf2962c4a544",
                "nome": "água 500ml",
                "preco": 2.99
            },
            {
                "id": "ead15ca8-cec2-482b-8113-13736dc19069",
                "nome": "Refrigerante 300ml",
                "preco": 4.99
            }
        ]);
    }
    ProdutosRepository.prototype.listar = function () {
        return __classPrivateFieldGet(this, _ProdutosRepository_produtos, "f");
    };
    ;
    ProdutosRepository.prototype.buscar = function (id) {
        return __classPrivateFieldGet(this, _ProdutosRepository_produtos, "f").find(function (item) { return item.id === id; });
    };
    ProdutosRepository.prototype.cadastrar = function (produto) {
        produto.id = (0, uuid_1.v4)();
        __classPrivateFieldGet(this, _ProdutosRepository_produtos, "f").push(produto);
        return produto;
    };
    ProdutosRepository.prototype.editar = function (produto) {
        var index = __classPrivateFieldGet(this, _ProdutosRepository_produtos, "f").findIndex(function (item) { return item.id === produto.id; });
        __classPrivateFieldGet(this, _ProdutosRepository_produtos, "f")[index] = produto;
    };
    ProdutosRepository.prototype.excluir = function (id) {
        var index = __classPrivateFieldGet(this, _ProdutosRepository_produtos, "f").findIndex(function (item) { return item.id === id; });
        var produto = __classPrivateFieldGet(this, _ProdutosRepository_produtos, "f")[index];
        __classPrivateFieldGet(this, _ProdutosRepository_produtos, "f").splice(index, 1);
        return produto;
    };
    return ProdutosRepository;
}());
_ProdutosRepository_produtos = new WeakMap();
var produtosRepository = new ProdutosRepository();
exports.produtosRepository = produtosRepository;
//toda a logica de buscar no banco de dados
