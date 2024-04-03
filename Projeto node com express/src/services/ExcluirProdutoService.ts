import { produtosRepository } from "../repositories/ProdutosRepository"; 
import { AppError } from "../errors/AppError";

class ExcluirProdutosService {
    execute (id: string){
        const produto = produtosRepository.buscar(id);  
        
        if(!produto) {
            throw new AppError('Produto não encontrado', 404);
        }

        return produtosRepository.excluir(id);
    }
};

const excluirProdutosService = new ExcluirProdutosService();

export { excluirProdutosService };