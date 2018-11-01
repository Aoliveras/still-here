const 
    jwt = require('jsonwebtoken'),
    User = require('./models/User'),
    { JWT_SECRET } = process.env;


//function for creating tokesn
function signToken(user) {
    const userData = user.toObject() // Convert user doc from mongo tinto basic JS Object
    delete userData.password; //removes password from json object because it's sensitive info
    return jwt.sign(userData, JWT_SECRET);
}

//Middleware for verifying tokens and protecting routes
function verifyToken(req, res, next) {
    console.log("verify token")
    // Grab the token from the header, the body, or a query string
    const token = req.get('token') || req.body.token || req.query.token;
    // If no token present, deny access
    if (!token) return res.json({ success: false, message: "No Token Provided." });
    jwt.verify(token, JWT_SECRET, (err, decodedData) => {
        if (err) res.json({ success: false, message: "Invalid Token" });
        User.findById(decodedData._id, (err, user) => {
            console.log(user);
            if (err) res.json({ success: false, message: "Invalid Token" });
            req.user = user; //add the user to request object
            next(); // Proceed to the next piece of middleware, action.
        })
    })
};

module.exports = { signToken, verifyToken }
