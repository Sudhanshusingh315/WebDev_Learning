const mongoose = require("mongoose");

const { Schema } = mongoose;

const RightSchema = new Schema({
  staff_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Staff",
  },
  right: {
    type: String,
  },
});

const Right = mongoose.model("Right", RightSchema);

module.exports = Right;
