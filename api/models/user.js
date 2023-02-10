const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  }
});

UserSchema.pre('save', function(next){
  const user = this;

  if(!user.isModified('password')){
    return next();
  }

  bcrypt.hash(user.password, saltRounds, function(saltRoundsError, hash){
    if (saltRoundsError){
      return next(saltRoundsError);
    }
    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", UserSchema);



module.exports = User;
