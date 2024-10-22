/* todo

1) seteup an express server
2) setup the api end points
3) setup for the routes and
4) make a controller
5) make the routes for the controller

*/
const express = require('express');
const server = express();
const productController  = require('./controller/product')
const productRouter = require('./routes/product');

// setting up the api endpoints

const router = express.Router();

server.use('/products',productRouter.router);



const port = 8080;
server.listen(port,()=>{
    console.log(`server is running ${port}`)
})