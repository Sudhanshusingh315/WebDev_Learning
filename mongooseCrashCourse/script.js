const mongoose = require("mongoose");
const User = require("./Model/Parents");
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/test");
  console.log("connected");
}
