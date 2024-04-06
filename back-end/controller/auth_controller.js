const User = require("../models/user_model");

//handle errors

const handle_errors = (err) => {
    console.log(err.message, err.code);
    let error = { username: "", user_password: ""};

    if(err.message.includes("validation failed")) {
        Object.values(err.errors).forEach(({properties}) => {
            if(properties.path === "username") {
                error["username"] = properties.message;
            }
            else {
                error["user_password"] = properties.message
            }
        });
    };
    return error;
};

module.exports.login_get = (req, res) => {
    res.send("login");
}

module.exports.signup_get = (req, res) => {
    res.send("signup");
}

module.exports.login_post = async (req, res) => {
    const { username, user_password } = req.body;
    
}

module.exports.signup_post = async (req, res) => {
    const { username, user_password } = req.body;

    try {
        const user = await User.create({username, user_password});
        res.status(201).json(user);
    }
    catch (err) {
        res.status(400);
        const errors = handle_errors(err);
        res.send(errors).json();
        res.end();
    }
}
