const mongoose = require("mongoose");
const { Schema } = mongoose;

const Staffschema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

Staff = mongoose.model("Staff", Staffschema);

module.exports = Staff;
