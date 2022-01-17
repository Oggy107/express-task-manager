const notFound = (req, res, next) => {
    res.status(400).send("<h2>Nothing Here</h2>");
}

module.exports = notFound;