const User = require("../models/user_model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
    }
    else if(err.code === 11000)
    {
        error.username = "This username already exists";
    }
    return error;
};

const max_age = 24 * 60 * 60;

const generate_token = (id) => {
    return jwt.sign({ id }, "dream_space", {
        expiresIn: max_age,
    });
};

module.exports.login_post = async (req, res) => {
    const { username, user_password } = req.body;

    try {
        const user = await User.findOne({username : username});
        if(user) {
            const auth = await bcrypt.compare(user_password, user.user_password);
            if(auth) {
                const token = generate_token(user._id);
                res.status(201).json({ token: token });
            }
            else {
                res.status(400).json({ state : "incorrect password"});
            }
        }
        else {
            res.status(404).json({ state : "not found"});
        }
    }
    catch (error) {
        console.log(error);
    }
    
}

module.exports.signup_post = async (req, res) => {
    const { username, user_password } = req.body;
    
    try {
        const user = await User.create({username, user_password});

        const token = generate_token(user._id);

        res.status(201).json({ token: token });
    }
    catch (err) {
        const errors = handle_errors(err);
        console.log(errors);
        res.status(400).json(errors);
    }
}

module.exports.get_users = async (req, res) => {
    const users = await User.find();
    res.send(users);
};
