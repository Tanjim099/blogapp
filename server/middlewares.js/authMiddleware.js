const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const isLoggedIn = async function (req, res, next) {
    const { token } = req.cookies;
    // console.log("token", token)
    if (!token) {
        return next(new AppError("Unauthenticated, please login", 400))
    }

    const tokenDetails = jwt.verify(token, process.env.JWT_SECRET)
    if (!tokenDetails) {
        return next(new AppError("Unauthenticated, please login", 400))
    }

    req.user = tokenDetails;

    next()
}

// Middleware for protecting routes
function authenticateToken(req, res, next) {
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
}


// export default { authenticateToken, isLoggedIn }
module.exports = { authenticateToken, isLoggedIn }
