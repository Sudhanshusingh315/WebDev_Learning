const express = require("express");
const mongoose = require("mongoose");
const app = express();
const mongoRouter = require("./routes/router");
// body parsers
app.use(express.json());

// Router
mongoose.connect("mongodb://localhost:27017/test");

// making routes
app.use("/testing", mongoRouter.routes);

app.listen(3000, () => {
  console.log("server on");
});
