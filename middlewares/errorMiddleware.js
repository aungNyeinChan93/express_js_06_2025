import chalk from "chalk";

const errorMiddleware = async (err, req, res, next) => {
    if (err) {
        console.log(chalk.redBright(err.message));
        return res.status(500).json(err.message)
    }
}

export default errorMiddleware;

