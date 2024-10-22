const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  comment: { type: String },
});

const Comment = mongoose.model("Comment", commentSchema);
