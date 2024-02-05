require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const bcrypt = require("bcryptjs");
const express = require("express");
const jwt = require("jsonwebtoken");
const { creatingToken, creatingrefreshToken } = require("./token");
const { fakeDB } = require("./fakeDB");
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173/", // this is the default port for frontend
    credentials: true,
  })
);
app.use(express.json()); // body parser

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = fakeDB.find((user) => user.email === email);
  if (user) {
    res.send("user already exists");
  } else {
    fakeDB.push({ id: fakeDB.length, email: email, password: password });
    res.json("value added");
  }
  console.log(fakeDB);
});

app.get("/users", (req, res) => {
  res.json(fakeDB);
});

app.post("/login", (req, res) => {
  const { emai, password } = req.body;
  try {
    const user = fakeDB.find((user) => user.password === password);
    if (!user) {
      res.send("user is not registed");
    }
    // create a refresh token
    const accessToken = creatingToken(password);
    const refreshToken = creatingrefreshToken(password);
  } catch (err) {}
});

app.listen(port, () => {
  console.log(`Port is runnig at ${port}`);
});
