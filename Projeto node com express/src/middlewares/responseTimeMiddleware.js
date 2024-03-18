class ResponseTimeMiddleware {
    executeBefore(req, res, next) {
        console.time('Response time');
        next();
    }

    executeAfter(req, res, next) {
        console.timeEnd('Response time');
        next();
    }
}

const responseTimeMiddleware = new ResponseTimeMiddleware();

export { responseTimeMiddleware };