
const loggerMiddleware = ((req, res, next) => {
    console.log(`${req.method} ${req.get('host') || req.hostname || ''}${req.url} Params: ${JSON.stringify(req.params)}`);
    next();
})

export default loggerMiddleware;