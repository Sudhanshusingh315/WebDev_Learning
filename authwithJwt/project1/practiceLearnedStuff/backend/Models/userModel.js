const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  email: { type: String, required: true, unique: true }, // String is shorthand for {type: String}
  password: String,
  name: String,
});

userSchema.methods.matchPassword = async function (userPassword) {
  if (userPassword === this.password) return true;
  else {
    return false;
  }
};

// creating the model
const PracticeUser = mongoose.model("PracticeUser", userSchema);
module.exports = PracticeUser;
