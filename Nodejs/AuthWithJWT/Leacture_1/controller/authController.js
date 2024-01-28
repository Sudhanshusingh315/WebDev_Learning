// All the controller functions will resides here

const User = require("../Models/User");

const handleErrors = (error) => {
  console.log(error.message);
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.signup_post = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (error) {
    handleErrors(error);
    res.send("user not created ");
  }
};

module.exports.login_post = (req, res) => {};
