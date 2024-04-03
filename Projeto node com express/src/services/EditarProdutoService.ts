import { produtosRepository } from "../repositories/ProdutosRepository"; 
import { AppError } from "../errors/AppError";
import { Produto } from "../models/Produto";

class EditarProdutosService {
    execute (produto: Produto){
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
