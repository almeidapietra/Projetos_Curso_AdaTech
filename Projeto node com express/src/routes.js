import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { produtosCrontroller } from './controllers/ProdutosController.js';
import { cadastrarProdutosService } from './services/CadrastrarProdutoService.js';
const routes = new Router();

const produtos = [];

//listar produtos:
routes.get('/produtos', produtosCrontroller.listar);

//cadastrar produto:
routes.post('/produtos', produtosCrontroller.cadastrar);

//buscar produto:
routes.get('/produtos/:id', produtosCrontroller.buscar);

//editar produto:
routes.put('/produtos/:id', produtosCrontroller.editar);

//exluir produto:
routes.delete('/produtos/:id', produtosCrontroller.excluir);

export {routes};

