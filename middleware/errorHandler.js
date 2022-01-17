const errorHandler = (err, req, res, next) => {
    if (err.status && err.msg)
        return res.status(err.status).json({success: false, msg: err.msg});

    res.status(500).json({success: false, msg: "Internal Server Error"});
}

module.exports = errorHandler;