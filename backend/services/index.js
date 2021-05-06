const jwt = require('jsonwebtoken')


/*function createToken(user){
    const token = jwt.sign({
        email: data.email,
        id: data._id
    }, process.env.TOKEN_SECRET)
    return jwt.encode(token, process.env.TOKEN_SECRET)
}*/
function Auth(req,res,next){
    const payload = jwt.decode(req.header('auth-token'), process.env.TOKEN_SECRET)

}

module.exports = Auth