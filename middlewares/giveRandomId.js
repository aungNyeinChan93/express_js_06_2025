

const getRandomId = async (req, res, next) => {
    const id = `${Math.floor(Math.random() * 9999)}_${Date.now()}`;
    req.rId = id;
    next()
}

export default getRandomId;