const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
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

// fires after the document has been saved

userSchema.post("save", function (doc, next) {
  console.log("new user has been created", doc);
  next();
});

// fires before a document has been saved

userSchema.pre("save", function (next) {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(this.password, saltRounds);
  this.password = hash;
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
