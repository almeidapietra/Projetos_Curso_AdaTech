import { NextFunction, Request, Response } from "express";

class ResponseTimeMiddleware {
    executeBefore(req: Request, res: Response, next: NextFunction) {
        console.time('Response time');
        next();
    }

    executeAfter(req: Request, res: Response, next: NextFunction) {
        console.timeEnd('Response time');
        next();
    }
}

const responseTimeMiddleware = new ResponseTimeMiddleware();

export { responseTimeMiddleware };