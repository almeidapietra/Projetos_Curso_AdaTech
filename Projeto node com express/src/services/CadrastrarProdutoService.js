import { produtosRepository } from "../repositories/ProdutosRepository.js"; 

class CadastrarProdutosService {
    execute (produto){
        const novoProduto = produtosRepository.cadastrar(produto);
        return novoProduto;
    }
};

const cadastrarProdutosService = new CadastrarProdutosService();

export { cadastrarProdutosService };
