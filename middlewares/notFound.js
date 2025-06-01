import chalk from "chalk";

const notFound = async (req, res, next) => {
    console.log(chalk.bgRed(`${req.method} - ${req.protocol}://${req.get('host') || req.hostname}${req.originalUrl}`));
    const error = new Error('404 not found!');
    error.status = 404;
    return next(error)
}

export default notFound;