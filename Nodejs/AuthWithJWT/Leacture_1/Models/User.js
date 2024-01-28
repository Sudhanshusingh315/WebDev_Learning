const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please enter an Email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please add a valid email"],
  },
  password: {
    type: String,
    require: [true, "Please enter a Password"],
    minLength: [6, "Password should be a minimum of 6 Characters"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
