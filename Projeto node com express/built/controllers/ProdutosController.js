"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtosCrontroller = void 0;
var ListarProdutosService_js_1 = require("../services/ListarProdutosService.js");
var BuscarProdutoService_js_1 = require("../services/BuscarProdutoService.js");
var CadrastrarProdutoService_js_1 = require("../services/CadrastrarProdutoService.js");
var EditarProdutoService_js_1 = require("../services/EditarProdutoService.js");
var ExcluirProdutoService_js_1 = require("../services/ExcluirProdutoService.js");
var ProdutosController = /** @class */ (function () {
    function ProdutosController() {
    }
    ProdutosController.prototype.listar = function (req, res, next) {
        var produtos = ListarProdutosService_js_1.listarProdutosService.execute();
        res.send(produtos);
        next(); // necessario para implementar o middleware reponseTime.
    };
    ProdutosController.prototype.buscar = function (req, res, next) {
        try {
            var id = req.params.id;
            var produto = BuscarProdutoService_js_1.buscarProdutosService.execute(id);
            res.send(produto);
            next();
        }
        catch (err) {
            next(err);
        }
    };
    ProdutosController.prototype.cadastrar = function (req, res) {
        var produto = CadrastrarProdutoService_js_1.cadastrarProdutosService.execute(req.body);
        return res.status(201).send(produto);
    };
    ProdutosController.prototype.editar = function (req, res, next) {
        try {
            var id = req.params.id;
            var dadosProduto = req.body;
            var produto = __assign({ id: id }, dadosProduto);
            var produtoEditado = EditarProdutoService_js_1.editarProdutosService.execute(produto);
            res.send(produtoEditado);
            next();
        }
        catch (err) {
            next(err);
        }
    };
    ProdutosController.prototype.excluir = function (req, res) {
        var id = req.params.id;
        var produto = ExcluirProdutoService_js_1.excluirProdutosService.execute(id);
        res.send(produto);
        next();
    };
    ProdutosController.prototype.catch = function (err) {
        next(err);
    };
    return ProdutosController;
}());
var produtosCrontroller = new ProdutosController();
exports.produtosCrontroller = produtosCrontroller;
