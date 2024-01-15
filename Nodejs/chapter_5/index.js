// MVC in Nodejs
const fs = require('fs');
const express = require('express');
const port = 8080;
const server = express();
const data = JSON.parse(fs.readFileSync("../chapter_3/data.json","utf-8")); 
const products = data.products;
// this is the midddleware that reads body
server.use(express.json());

// MVC = morden view controller

// Get : getting the details of all the product 
server.get('/products',(req,res)=>{
    res.json(products);
})
// Get : getting the specific object
server.get('/products/:id',(req,res)=>{
    const id = (+req.params.id);
    const product = products.find(p=>p.id===id);
    res.json(product);
})

// Adding the data to the file

server.post('/products',(req,res)=>{
    console.log(res.body);
    res.send("check the console for body")
})


server.listen(port,()=>{

    console.log(`server is running at ${8080}`)
});