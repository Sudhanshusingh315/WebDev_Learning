const jwt = require("jsonwebtoken");

const User = require("../models/userModels");

const protect = async function (req, res, next) {
  try {
    let token;

    // without the cookie parser we won't be able to do this
    token = req.cookies.jwt;

    if (token) {
      try{
        const decoded  = jwt.verify(token,process.env.JWT_SECRET);
        console.log("decoed token from authMiddleware",decoded);
        req.user = await User.findById(decoded.userId).select('-password'); 
        next();
      }catch(err){
        res.json(err.message);
      }
      
    } else {
      throw new Error("Not authorised, no token")
    }
  } catch (err) {
    res.json({[err.name]:err.message})
  }
};


module.exports = protect;