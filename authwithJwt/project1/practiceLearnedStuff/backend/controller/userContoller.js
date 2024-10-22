const PracticeUser = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generateToken");
// @desc -> for login -> public router
// @method -> post
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await PracticeUser.find({ email });
    if (userExists && (await userExists.matchPassword(password))) {
      // gets the token
      const token = await generateToken(userExists._id);

      res.status(201).json({
        token,
        name: userExists.name,
      });
    }else{
      res.json(401)
      throw new Error("Email or Password invalid")
    }
  } catch (err) {
    res.json({ [err.name]: err.message });
  }
};
exports.registerUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const userExists = await PracticeUser.findOne({ email });
    if (userExists) {
      res.status(401);
      throw new Error("User already exists");
    }
    const newUser = await PracticeUser.create({
      name,
      email,
      password,
    });
    if(newUser) {
      const token = await generateToken(newUser._id);
      res.status(201).json({
        token: token,
        name: newUser.name,
        emial: newUser.email,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      [err.name]: err.message,
    });
    // do something here
  }
};
