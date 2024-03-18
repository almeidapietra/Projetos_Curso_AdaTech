class RequestDataMiddleware {
    execute( req, res, next) {
        const dataAtual = new Date();

        const options = {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        console.log( 'Request data: ' + dataAtual.toLocaleString('en-US', options));

        next();
    }
}

const requestDataMiddleware = new RequestDataMiddleware();

export { requestDataMiddleware };