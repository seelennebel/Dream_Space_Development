const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const valid = (input) => {
  if(input.trim().length === 0) {
    return false;
  };
  return true;
};

const User_Schema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please, enter your username"],
    unique: true,
    validate: [valid, "username in not valid"]
  },
  user_password: {
    type: String,
    required: [true, "Please, enter your password"],
    validate: [valid, "password is not valid"]
  },
  wakeUpTime: {
    type: String,
    required: true
  },
  bedtime: {
    type: String,
    required: true
  }
});

User_Schema.pre("save", async function(next) {
  const salt = await bcrypt.genSalt();
  this.user_password = await bcrypt.hash(this.user_password, salt);
  next();
});

User_Schema.post("save", (doc, next) => {
  next();
});

const User = mongoose.model('users', User_Schema);

module.exports = User; 