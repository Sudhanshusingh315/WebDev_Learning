const express = require("express");
const mongoose = require("mongoose");
const nestedRouter = require("../NestedPopulation/routes/router");
const server = express();

// body parser
server.use(express.json());

// Connecting to mongoose

main().catch((err) => console.log(err.message));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/test");
  console.log("connected");
}

// Writing my router
server.use("/nested", nestedRouter.routes);

// server listen on this port
server.listen(3000, () => {
  console.log("localhost:3000");
});
