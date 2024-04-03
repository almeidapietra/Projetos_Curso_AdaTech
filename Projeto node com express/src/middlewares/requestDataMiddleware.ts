import { NextFunction, Request, Response } from "express";

class RequestDataMiddleware {
    execute( req: Request, res: Response, next: NextFunction) {
        const dataAtual = new Date();

        const options: Intl.DateTimeFormatOptions  = {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        console.log( 'Request data: ' + dataAtual.toLocaleString('pt-BR', options));

        next();
    }
}

const requestDataMiddleware = new RequestDataMiddleware();

export { requestDataMiddleware };