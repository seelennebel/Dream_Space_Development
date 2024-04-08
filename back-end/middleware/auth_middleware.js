const jwt = require("jsonwebtoken");

const require_auth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, "dream_space", (err, decoded_token) => {
            if(err) {
                console.log(err);
                res.redirect("/login");
            }
            else {
                next();
            }
        });
    }
    else {
        res.redirect("/login");
    }
};

module.exports = require_auth;