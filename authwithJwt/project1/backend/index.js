const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRouter = require("./Routes/userRoutes");
const port = 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://LeaderOfMeow:qwezxc!!%40!@cluster1.fvlhmya.mongodb.net/jwtPractice"
  );
  console.log("mongoose connected");
}
// user Auth router
app.use("/api/user", userRouter.router);

app.listen(port, () => {
  console.log("backend is running at 5000");
});
