const mongoose = require('mongoose');

const User_Schema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'please, enter your username'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'please, enter your password'],
  }
});

const User = mongoose.model('user', User_Schema);

module.exports = User;