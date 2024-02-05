const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const posts = [
  { username: "meow", content: "post 1" },
  {
    username: "sudhanshu",
    content: "post 2",
  },
];
app.use(express.json());
app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  const token = jwt.sign(user, "meow"); // meow is my sceret key here

  res.json({ token: token });
});

app.listen(3000, () => {
  console.log("server running at 3000");
});
