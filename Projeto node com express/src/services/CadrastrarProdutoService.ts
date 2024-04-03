import { Produto } from "../models/Produto";
import { produtosRepository } from "../repositories/ProdutosRepository"; 

class CadastrarProdutosService {
    execute (produto: Produto){
        const novoProduto = produtosRepository.cadastrar(produto);
        return novoProduto;
    }
};

const cadastrarProdutosService = new CadastrarProdutosService();

export { cadastrarProdutosService };
