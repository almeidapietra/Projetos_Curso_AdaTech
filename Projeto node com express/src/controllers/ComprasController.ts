import { NextFunction, Request, Response } from "express";
import { cadastrarCompraService } from "../services/CadastrarCompraService";

class ComprasController {
    cadastrar(req: Request, res: Response, next: NextFunction){
        try{
            const compra = cadastrarCompraService.execute(req.body);
            return res.status(201).send(compra);
        } catch(err){
            next(err);
        }
    }
}

const comprasController = new ComprasController();

export { comprasController };