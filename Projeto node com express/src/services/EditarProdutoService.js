import { produtosRepository } from "../repositories/ProdutosRepository.js"; 

class EditarProdutosService {
    execute (produto){
        const produtoExistente = produtosRepository.buscar(produto.id);

        if (!produtoExistente) {
            return null;
        }

        const produtoEditado = produtosRepository.editar(produto); 
        return produtoEditado;       
    }
};

const editarProdutosService = new EditarProdutosService();

export { editarProdutosService };