import chulk from 'chalk'

const loggerMiddleware = ((req, res, next) => {
    console.log(chulk.blue(`${chulk.bgGreen(req.method)} ${req.protocol}://${req.get('host') || req.hostname || ''}${req.originalUrl}`));
    next();
})

export default loggerMiddleware;