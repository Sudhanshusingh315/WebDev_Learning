const User = require("../models/userModels");
const generateToken = require("../utils/userToken");

// @desc  Auth  user/set Token, login
// route  Post /api/user/auth
// @access  Public
exports.authUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await user.matchPasswords(password))) {
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (err) {
    // any error that is there wil be caught here
    res.json({
      [err.name]: err.message,
    });
  }
};




// @desc  Register a new user
// route  Post /api/user/
// @access  Public
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log({ name, email, password });
    if (!name || !email || !password) {
      throw new Error("Please fill out all the fields");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(401);
      throw new Error("User already exists");
    }
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user Credentials");
    }
  } catch (err) {
    res.json({
      [err.name]: err.message,
    });
  }
};

// @desc  Logout a user
// route  Post /api/user/logout
// @access  Public
exports.logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: "User logged out" });
  } catch (err) {
    // any error that is there wil be caught here
    res.status(400).json({"Erro":err.message});
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
    const user = await User.findById(req.user._id);
    if (user) {
      // this is where i should have used Obejet.entries 
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();
      
    } else {
      throw new Error("user not found");
    }

    res.status(200).json({ message: "Upare user profile" });
  } catch (err) {
    res.json({
      [err.name]: user.message,
    });
  }
};
