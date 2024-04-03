import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

class ErrorHandlerMiddleware {
    execute(err: AppError, req: Request, res: Response, next: NextFunction) {
        if(err) {
            if( err instanceof AppError) {
                return res.status(err.status).send({ mensagem: err.mensagem });
            }

            console.error(err);
            return res.status(500).send({ mensagem: 'Erro interno do servidor'});
        }

        next()
    }
}

const errorHandlerMiddleware = new ErrorHandlerMiddleware();

export { errorHandlerMiddleware };

/* Tratar o erro:
1. verificar se o erro é do tipo AppError
2. se for AppError: Deesestruturar para apresentar a mensagem com o status informado
3. se nao for AppError: logar o erro no console e lançar um erro padrão com status 500*/