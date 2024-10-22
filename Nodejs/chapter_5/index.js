require('dotenv').config({path:"../.env"});
const express = require("express");
const morgan = require("morgan");
const server = express();
const productRouter = require('../routes/product');
const userRouter = require('../routes/user')
const mongoose  =require('mongoose');

// DB connection code
main().catch(err=>console.log(err))

async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database connected');
}

//body parser
server.use(express.json());
server.use(morgan("default"));
server.use('/products',productRouter.routes);
server.use('/users',userRouter.routes);
server.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
