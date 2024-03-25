import { produtosRepository } from "../repositories/ProdutosRepository.js"; 
import { AppError } from "../errors/AppError.js";

class EditarProdutosService {
    execute (produto){
        const produtoExistente = produtosRepository.buscar(produto.id);

        if(!produto?.nome){
            throw new AppError('Nome do produto é obrigatório');
        }

        if (!produtoExistente) {
            throw new AppError('Produdo não encontrado' , 404);
        }

        const produtoEditado = produtosRepository.editar(produto); 
        return produtoEditado;       
    }
};

const editarProdutosService = new EditarProdutosService();

export { editarProdutosService };
