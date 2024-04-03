import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { produtosCrontroller } from './controllers/ProdutosController';
import { cadastrarProdutosService } from './services/CadrastrarProdutoService';
import { infoRequestMiddleware } from './middlewares/infoRequestMiddleware';
import { responseTimeMiddleware } from './middlewares/responseTimeMiddleware';
import { requestDataMiddleware } from './middlewares/requestDataMiddleware';
import { errorHandlerMiddleware } from './middlewares/ErrorHandlerMiddleware ';

const routes = Router();

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