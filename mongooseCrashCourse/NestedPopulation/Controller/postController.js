const Post = require("../Model/postModel");
const User = require("../Model/userModel");

// post method
exports.postContent = async (req, res) => {
  const { title, content, userId } = req.body;
  const post = await Post.create({
    author: userId,
    title: title,
    content: content,
  });

  console.log("response of the post", post);
  console.log("post id", post._id);
  // now i need to update the user data
  const updatedUser = await User.findByIdAndUpdate(
    { _id: userId },
    { $push: { posts: post._id } }
  );
  res.send(updatedUser);
};
