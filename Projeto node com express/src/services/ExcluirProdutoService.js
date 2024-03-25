import { produtosRepository } from "../repositories/ProdutosRepository.js"; 
import { AppError } from "../errors/AppError.js";

class ExcluirProdutosService {
    execute (id){
        const produto = produtosRepository.buscar(id);  
        
        if(!produto) {
            throw new AppError('Produto não encontrado', 404);
        }

        return produtosRepository.excluir(id);
    }
};

const excluirProdutosService = new ExcluirProdutosService();

export { excluirProdutosService };