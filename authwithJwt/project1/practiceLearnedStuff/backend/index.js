const express = require("express");
const mongoose = require("mongoose");
const userAuthRouter = require("./routes/userRouter");
const app = express();
app.use(express.json());
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://LeaderOfMeow:qwezxc!!%40!@cluster1.fvlhmya.mongodb.net/jwtPractice"
  );
  console.log("mongoose connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Router for user
app.use('/api/user',userAuthRouter.router);

app.listen(5000, () => {
  console.log("server running at port 5000");
});
