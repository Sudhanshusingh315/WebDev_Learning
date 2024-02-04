const User = require("../Models/user");
const jwt = require("jsonwebtoken");
async function registerUser(req, res) {
  const { name, email, password } = req.body;
  let token = jwt.sign(
    {
      email: email,
    },
    "secret",
    { expiresIn: "3d" }
  );
  const user = await User.create({
    name,
    email,
    password,
    token,
  });
  res.status(201).json(user);
}

function testUser(req, res) {
  res.status(201).send("Auth workds, token verified");
}

module.exports = { registerUser, testUser };
