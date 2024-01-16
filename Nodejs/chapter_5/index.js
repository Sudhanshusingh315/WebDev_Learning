const express = require("express");
const morgan = require("morgan");
const server = express();
const port = 8080;
server.use(express.json());
server.use(morgan("default"));
const productRouter = require('../routes/product');

server.use(express.json());
server.use('/api',productRouter.routes11);
server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
