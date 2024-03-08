const User = require("../Model/userModel");

// post method, to create a user (will update it later)
exports.createUser = async (req, res) => {
  const { name } = req.body;
  // creating a user
  const user = await User.create({
    name: name,
  });
  res.send(user);
};

// This is getting info on my user
exports.getMyUser = async (req, res) => {
  const id = req.query.id;
  const user = await User.find({ _id: id }).populate("posts");
  res.send(user);
};
