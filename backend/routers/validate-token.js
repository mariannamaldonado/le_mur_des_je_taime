const jwt = require('jsonwebtoken')

// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        req.current_user_id = verified.id
        next() // continuamos
    } catch (error) {
        res.status(400).json({error: 'Token no es válido'})
    }
}

module.exports = verifyToken;
