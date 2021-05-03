const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

    // For CORS skip the token auth for [OPTIONS] requests.
    if(req.method == 'OPTIONS') next();

    var token = (req.body && req.body.token) || (req.query && req.query.token) || req.headers['x-access-token'];

    if (token) {
        try {
            var decoded = jwt.verify(token, process.env.SESSION_SECRET);
            console.log("token data: ")
            console.log(decoded)
            if (decoded.exp <= Math.floor(Date.now() / 1000)) {
                res.status(400);
                res.json({
                    "status": 400,
                    "message": "Token Expired"
                });
                return;
            }
            
            // si todo esta bien, attach the user id to req object and call the next middleware
            req.user_id = decoded.id
            next();
            

        } catch (err) {
            res.status(500);
            res.json({
                "status": 500,
                "message": "Invalid Token",
                "error": err
            });
        }
    } else {
        res.status(401);
        res.json({
            "status": 401,
            "message": "Invalid Token or Key"
        });
        return;
    }
};