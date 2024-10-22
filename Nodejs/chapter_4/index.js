const fs = require('fs');
const express = require('express');
const port = 8080;

const products = JSON.parse(fs.readFileSync("../chapter_3/data.json","utf-8"));
const data = products.products;

const server = express();

//body parser
server.use(express.json());
// Read Get all the products

server.get('/products',(req,res)=>{
   res.json(products) 
});

// Read Get the individual products

server.get('/products/:id',(req,res)=>{
    let id = req.params.id;
    let requestedProduct = data.find(p=>p.id===(+id));
    res.json(requestedProduct);
    
})


// adding the data throudh the server
server.post('/',(req,res)=>{
    console.log(req.body);
    data.push(req.body);
    res.json(req.body);
    
});

//  UPDATE, updating the data, this replaces the content inside of the existing data
server.put('/products/:id',(req,res)=>{
    const id = (+req.params.id);
    console.log(typeof(id),id);
    const productIndex = (data.findIndex(p=>p.id===id));
    data.splice(productIndex,1,{...req.body, id:id}) 
    res.send("Value updated, run GET method to check")
})

server.delete('/',(req,res)=>{
    res.json({type:'DELETE'})
});

// UPDATE, with pathc, this will keep the old data but also will add new to it

server.patch('/products/:id',(req,res)=>{
    res.json({type:'PATCH'})
    const id = (+req.params.id);
    const productIndex = (data.findIndex(p=>p.id===id));
    const preProduct = data[productIndex];
    data.splice(productIndex,1,{...preProduct,...req.body});
    res.send("Updated, check GET to see the data");
});




server.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})