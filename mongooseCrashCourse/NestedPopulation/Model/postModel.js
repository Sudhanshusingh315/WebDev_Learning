const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  content: { type: String },
  comments: { type: mongoose.Schema.Types.ObjectId, ref: "Comments" },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
