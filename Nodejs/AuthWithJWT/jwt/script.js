const express = require("express");
const mongoose = require("mongoose");
const registerRouter = require("./routes/register");
const jwt = require("jsonwebtoken");
const app = express();
// Connecting mongoose
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  console.log("Mongoose connected");
}

// Setup a middleware here so that you can then use the authorization

app.use((req, res, next) => {
  const header = req.get("Authorization");
  console.log(header);
  const token = header.split(" ")[1];

  let decoded = jwt.verify(token, "secret");
  if (decoded) {
    next();
  } else {
    res.status(401).send("not an authorised nigga");
  }
});

// these are all the API routes
app.use(express.json()); // this is the body parser
app.use("/api/test", registerRouter);
app.listen(8080, () => {
  console.log("Listening to port 8080");
});
