import { produtosRepository } from "../repositories/ProdutosRepository.js"; 
import { AppError } from "../errors/AppError.js";

class BuscarProdutosService {
    execute (id) {
       const produto = produtosRepository.buscar(id);

       if (!produto) {
        throw new AppError('Produto não encontrado', 404);
       }

       return produto;
    }
};

const buscarProdutosService = new BuscarProdutosService();

export { buscarProdutosService };
