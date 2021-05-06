const jwt = require('jsonwebtoken')
let x = 'asdasd'
// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
    } catch (error) {
        res.status(400).json({ error: 'Token no es válido' })
    }
    const payload = jwt.decode(token, process.env.TOKEN_SECRET)
    console.log(payload.id)
    return payload.id

}

module.exports = verifyToken;
