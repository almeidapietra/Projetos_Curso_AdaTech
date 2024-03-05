import { produtosRepository } from "../repositories/ProdutosRepository.js"; 

class BuscarProdutosService {
    execute (id) {
       const produto = produtosRepository.buscar(id);

       if (!produto) {
        return null;
       }

       return produto;
    }
};

const buscarProdutosService = new BuscarProdutosService();

export { buscarProdutosService };
