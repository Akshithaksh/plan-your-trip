const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, "webBatch")
        req.userData = decode
        next();
    }catch(error) {
        res.json({success: false,message: "Auth Failed" })
    }
}
