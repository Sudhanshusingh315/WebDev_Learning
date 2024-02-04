// All the controller functions will resides here

const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const handleErrors = (error) => {
  console.log(error.message);
};

const maxAge = 3 * 24 * 60 * 60;
const creatToken = (id) => {
  jwt.sign({ id }, "meow sceret", {
    expiresIn: maxAge,
  });
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
    const token = jwt.creatToken(user._id);

    res.status(201).json(user);
  } catch (error) {
    handleErrors(error);
    res.send("user not created ");
  }
};

module.exports.login_post = (req, res) => {};
