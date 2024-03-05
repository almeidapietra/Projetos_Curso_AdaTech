import { produtosRepository } from "../repositories/ProdutosRepository.js"; 

class ExcluirProdutosService {
    execute (id){
        const produto = produtosRepository.buscar(id);  
        
        if(!produto) {
            return null;
        }

        return produtosRepository.excluir(id);
    }
};

const excluirProdutosService = new ExcluirProdutosService();

export { excluirProdutosService };