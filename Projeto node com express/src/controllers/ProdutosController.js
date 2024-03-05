import { listarProdutosService } from "../services/ListarProdutosService.js";
import { buscarProdutosService } from "../services/BuscarProdutoService.js";
import { cadastrarProdutosService } from "../services/CadrastrarProdutoService.js";
import { editarProdutosService } from "../services/EditarProdutoService.js";
import { excluirProdutosService } from "../services/ExcluirProdutoService.js";

class ProdutosController {
    listar(req, res){
        const produtos = listarProdutosService.execute();
        return res.send(produtos);
    }

    buscar(req, res){
        const { id } = req.params;
        const produto = buscarProdutosService.execute(id);

        if (!produto) {
            return res.status(404).send({mensagem: "Produto não encontrado"});
        }    
        return res.send(produto);
    }

    cadastrar(req, res){
        const produto = cadastrarProdutosService.execute(req.body);
        return res.status(201).send(produto);
    }

    editar (req, res) {
        const { id } = req.params;
        const dadosProduto = req.body;
        const produto = { id, ...dadosProduto };
        const produtoEditado = editarProdutosService.execute(produto);
        return res.send(produto);

    }

    excluir(req, res) {
        const { id } = req.params;
        const produto = excluirProdutosService.execute(id);

        if (!produto) {
            return res.status(404).send({mensagem: "Produto não encontrado"});
        }

        return res.send(produto);
    }
}

const produtosCrontroller = new ProdutosController();

export { produtosCrontroller };