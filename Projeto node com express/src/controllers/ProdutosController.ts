import { listarProdutosService } from "../services/ListarProdutosService";
import { buscarProdutosService } from "../services/BuscarProdutoService";
import { cadastrarProdutosService } from "../services/CadrastrarProdutoService";
import { editarProdutosService } from "../services/EditarProdutoService";
import { excluirProdutosService } from "../services/ExcluirProdutoService";
import { NextFunction, Request, Response } from "express";

class ProdutosController {
    listar(req: Request, res: Response, next: NextFunction){ 
        const produtos = listarProdutosService.execute();
        res.send(produtos);
        next(); // necessario para implementar o middleware reponseTime.
    }

    buscar(req: Request, res: Response, next: NextFunction){
        try {
            const { id } = req.params;
            const produto = buscarProdutosService.execute(id);

            res.send(produto);
            next();
        } catch (err) {
            next(err);
        }
        
    }

    cadastrar(req: Request, res: Response, next: NextFunction){
        const produto = cadastrarProdutosService.execute(req.body);
        res.status(201).send(produto);
        next();
    }

    editar (req: Request, res: Response, next: NextFunction) {
       try{ 
            const { id } = req.params;
            const dadosProduto = req.body;
            const produto = { id, ...dadosProduto };
            const produtoEditado = editarProdutosService.execute(produto);
            res.send(produtoEditado);
            next();
       } catch (err) {
            next(err);
       }

    }

    excluir(req: Request, res: Response, next: NextFunction) {
        try{
        const { id } = req.params;
        const produto = excluirProdutosService.execute(id);      
        res.send(produto);
        next();
    } catch (err) {
        next(err);
   }
}
}

const produtosCrontroller = new ProdutosController();

export { produtosCrontroller };