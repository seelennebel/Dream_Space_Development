const mongoose = require('mongoose');

const valid = (input) => {
  if(input.trim().length === 0) {
    return false;
  };
  return true;
};

const User_Schema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please, enter your username"],
    unique: true,
    validate: [valid, "username in not valid"]
  },
  user_password: {
    type: String,
    required: [true, "please, enter your password"],
    validate: [valid, "password is not valid"]
  }
});

User_Schema.pre("save", function() => {
  
});

User_Schema.post("save", (doc, next) => {
  console.log(doc);
  next();
});

const User = mongoose.model('user12', User_Schema);

module.exports = User; 