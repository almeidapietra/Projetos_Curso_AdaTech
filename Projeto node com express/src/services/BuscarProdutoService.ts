import { produtosRepository } from "../repositories/ProdutosRepository"; 
import { AppError } from "../errors/AppError";

class BuscarProdutosService {
    execute (id: string) {
       const produto = produtosRepository.buscar(id);

       if (!produto) {
        throw new AppError('Produto não encontrado', 404);
       }

       return produto;
    }
};

const buscarProdutosService = new BuscarProdutosService();

export { buscarProdutosService };
