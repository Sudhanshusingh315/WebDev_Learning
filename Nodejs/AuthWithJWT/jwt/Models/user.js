const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unquie: true },
  password: { type: String, require: true },
  token: { type: String },
});

userSchema.pre("save", async function (nextl) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (err) {
    return next(err);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
