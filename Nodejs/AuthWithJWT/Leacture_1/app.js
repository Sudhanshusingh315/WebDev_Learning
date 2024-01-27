const express = require("express");
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://LeaderOfMeow:qwezxc%21%21%40%21@cluster0.zrowoij.mongodb.net/JWT-auth";
const app = express();

async function main() {
  await mongoose.connect(
    uri,
    { useNewUrlParser: true },
    { useUnifiedTopology: true },
    { useCreateIndex: true }
  );
  console.log("connects");
}
main().catch((err) => console.log(err));
// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// database connection
// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
