import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { produtosCrontroller } from './controllers/ProdutosController.js';
import { cadastrarProdutosService } from './services/CadrastrarProdutoService.js';
import { infoRequestMiddleware } from './middlewares/infoRequestMiddleware.js';
import { responseTimeMiddleware } from './middlewares/responseTimeMiddleware.js';
import { requestDataMiddleware } from './middlewares/requestDataMiddleware.js';
import { errorHandlerMiddleware } from './middlewares/ErrorHandlerMiddleware .js';

const routes = new Router();

routes.use(infoRequestMiddleware.execute); // se não está em all tem que colocar nos parâmtros das rotas que vai usar. ou pode usar o rotes.use (vai usar em todas as rotas ABAIXO desta linha).
routes.use(requestDataMiddleware.execute);

routes.use(responseTimeMiddleware.executeBefore);
//listar produtos:
routes.get('/produtos', produtosCrontroller.listar);
routes.use(responseTimeMiddleware.executeAfter); //testando esse midleware apernas para esta rota.

//cadastrar produto:
routes.post('/produtos', produtosCrontroller.cadastrar);

//buscar produto:
routes.get('/produtos/:id', produtosCrontroller.buscar);

//editar produto:
routes.put('/produtos/:id', produtosCrontroller.editar);

//exluir produto:
routes.delete('/produtos/:id', produtosCrontroller.excluir);

routes.use(errorHandlerMiddleware.execute);

export {routes};