"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var uuid_1 = require("uuid");
var ProdutosController_js_1 = require("./controllers/ProdutosController.js");
var CadrastrarProdutoService_js_1 = require("./services/CadrastrarProdutoService.js");
var infoRequestMiddleware_js_1 = require("./middlewares/infoRequestMiddleware.js");
var responseTimeMiddleware_js_1 = require("./middlewares/responseTimeMiddleware.js");
var requestDataMiddleware_js_1 = require("./middlewares/requestDataMiddleware.js");
var ErrorHandlerMiddleware__js_1 = require("./middlewares/ErrorHandlerMiddleware .js");
var routes = new express_1.Router();
exports.routes = routes;
routes.use(infoRequestMiddleware_js_1.infoRequestMiddleware.execute); // se não está em all tem que colocar nos parâmtros das rotas que vai usar. ou pode usar o rotes.use (vai usar em todas as rotas ABAIXO desta linha).
routes.use(requestDataMiddleware_js_1.requestDataMiddleware.execute);
routes.use(responseTimeMiddleware_js_1.responseTimeMiddleware.executeBefore);
//listar produtos:
routes.get('/produtos', ProdutosController_js_1.produtosCrontroller.listar);
routes.use(responseTimeMiddleware_js_1.responseTimeMiddleware.executeAfter); //testando esse midleware apernas para esta rota.
//cadastrar produto:
routes.post('/produtos', ProdutosController_js_1.produtosCrontroller.cadastrar);
//buscar produto:
routes.get('/produtos/:id', ProdutosController_js_1.produtosCrontroller.buscar);
//editar produto:
routes.put('/produtos/:id', ProdutosController_js_1.produtosCrontroller.editar);
//exluir produto:
routes.delete('/produtos/:id', ProdutosController_js_1.produtosCrontroller.excluir);
routes.use(ErrorHandlerMiddleware__js_1.errorHandlerMiddleware.execute);
