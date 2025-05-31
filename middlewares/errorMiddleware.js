const errorMiddleware = async (err, req, res, next) => {
    if (err) {
        return res.status(500).json(err.message)
    }
}

export default errorMiddleware;