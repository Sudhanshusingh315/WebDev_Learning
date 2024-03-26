const User = require("../models/userModels");

// @desc  Auth  user/set Token
// route  Post /api/user/auth
// @access  Public
exports.authUser = async (req, res) => {
  try {
    res.status(200).json({ message: "authorization of the user" });
    // do the stuff here, main code
  } catch (err) {
    // any error that is there wil be caught here
  }
};

// @desc  Register a new user
// route  Post /api/user/
// @access  Public
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("Please fill out all the fields");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    }else{
      res.status(400)
      throw new Error('Invalid user Credentials')
    }

    res.status(200).json({ message: "Register User" });
  } catch (err) {
    console.log(err);
    res.status(400).send("Please fill out all the fields");
  }
};

// @desc  Logout a user
// route  Post /api/user/logout
// @access  Public
exports.logoutUser = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout User" });
  } catch (err) {
    // any error that is there wil be caught here
  }
};

// @desc  Get user profile
// route  Get /api/user/profile
// @access  Private
exports.getUserProfile = async (req, res) => {
  try {
    res.status(200).json({ message: "Get User profile" });
  } catch (err) {
    // any error that is there wil be caught here
  }
};

// @desc  Update user profile
// route  put /api/user/profile
// @access  Private
exports.updateUserProfile = async (req, res) => {
  try {
    res.status(200).json({ message: "Upare user profile" });
  } catch (err) {
    // any error that is there wil be caught here
  }
};
