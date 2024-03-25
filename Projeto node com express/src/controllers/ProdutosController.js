import { listarProdutosService } from "../services/ListarProdutosService.js";
import { buscarProdutosService } from "../services/BuscarProdutoService.js";
import { cadastrarProdutosService } from "../services/CadrastrarProdutoService.js";
import { editarProdutosService } from "../services/EditarProdutoService.js";
import { excluirProdutosService } from "../services/ExcluirProdutoService.js";

class ProdutosController {
    listar(req, res, next){
        const produtos = listarProdutosService.execute();
        res.send(produtos);
        next(); // necessario para implementar o middleware reponseTime.
    }

    buscar(req, res, next){
        try {
            const { id } = req.params;
            const produto = buscarProdutosService.execute(id);

            res.send(produto);
            next();
        } catch (err) {
            next(err);
        }
        
    }

    cadastrar(req, res){
        const produto = cadastrarProdutosService.execute(req.body);
        return res.status(201).send(produto);
    }

    editar (req, res, next) {
       try{ 
            const { id } = req.params;
            const dadosProduto = req.body;
            const produto = { id, ...dadosProduto };
            const produtoEditado = editarProdutosService.execute(produto);
            res.send(produtoEditado);
            next();
       } catch (err) {
            next(err);
       }

    }

    excluir(req, res) {
        const { id } = req.params;
        const produto = excluirProdutosService.execute(id);      
        res.send(produto);
        next();
    } catch(err) {
        next(err);
    }
}

const produtosCrontroller = new ProdutosController();

export { produtosCrontroller };