require("dotenv").config("../.env");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://LeaderOfMeow:qwezxc%21%21%40%21@cluster0.zrowoij.mongodb.net/JWT-auth";
const app = express();
const authRouter = require("./routes/authRouts");
const port = process.env.PORT || 8080;
main().catch((err) => console.log(err));
async function main() {
  await mongoose
    .connect(uri, { useUnifiedTopology: true }, { useCreateIndex: true })
    .then(() => {
      console.log("MongoDB connected");
    });
}
// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// database connection
// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));

// Cookies

app.get("/set-cookies", (req, res) => {
  res.cookie("Set-cookie", "newUser=true");
  res.send("you got cookies");
});

app.get("/get-cookies", (req, res) => {});

app.use(authRouter);

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
