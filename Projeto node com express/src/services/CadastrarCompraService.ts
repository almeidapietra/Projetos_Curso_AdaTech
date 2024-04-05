import { AppError } from "../errors/AppError";
import { Compra } from "../models/Compra";
import { comprasRepository } from "../repositories/ComprasRepository";
import { produtosRepository } from "../repositories/ProdutosRepository";

interface Request {
    nomeComprador: string;
    itens: RequestItens[];
}

interface RequestItens {
    idProduto: string;
    quantidade: number;
}

class CadastrarCompraService {
    execute({nomeComprador, itens}: Request){
        if (!nomeComprador){
            throw new AppError('Nome do comprador é obrigatório');
        }

        if (!itens || itens.length === 0) {
            throw new AppError('Itens de compra são obrigatórios');
        }

        let valorTotal = 0;
        for(const item of itens) {
           const produto = produtosRepository.buscar(item.idProduto);

           if(!produto){
            throw new AppError('Produto não encontrado');            
           }

           valorTotal += produto.preco *item.quantidade;
        }

        valorTotal = parseFloat(valorTotal.toFixed(2));

        const novaCompra: Compra = {
            nomeComprador,
            itens,
            data: new Date(),
            valorTotal
        };

        return comprasRepository.cadastrar(novaCompra);
    }
}

const cadastrarCompraService =  new CadastrarCompraService();

export { cadastrarCompraService };