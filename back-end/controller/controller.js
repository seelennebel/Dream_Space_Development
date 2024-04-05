const User = require("../models/user_model");

module.exports.signup_post = async (req, res) => 
{
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.status(201).json(user);
}