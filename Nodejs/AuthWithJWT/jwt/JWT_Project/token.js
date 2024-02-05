const jwt = require("jsonwebtoken");
require("dotenv").config();
const creatingToken = (userPassword) => {
  return jwt.sign({ userPassword: userPassword }, process.env.SCERET, {
    expiresIn: "15m",
  });
};
const creatingrefreshToken = (userPassword) => {
  return jwt.sign({ userPassword: userPassword }, process.env.SCERET, {
    expiresIn: "7d",
  });
};

module.exports = { creatingToken, creatingrefreshToken };
