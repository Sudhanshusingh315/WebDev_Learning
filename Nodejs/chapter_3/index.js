// This is the starting of express 
const fs = require('fs');
const morgan = require('morgan');
const express = require('express');

const data = JSON.parse(fs.readFileSync('./data.json','utf-8'));


const port = 8080;
const server = express();

//  Making a Middle ware

server.use((req,res,next)=>{
    console.log(req.url,req.method, req.hostname);
    next();
})

// Middleware for auth (custom)
const auth = (req,res,next)=>{
   if(req.query.password==123){
    next();
   }
   else{
    res.sendStatus(401);
   }     
}

server.use(auth);


//  Making different apis - Endpoints - Route

server.get('/',(req,res)=>{
    res.json({type:"GET"})
})
server.post('/',(req,res)=>{
    res.json({type:"POST"})
})

server.delete('/',(req,res)=>{
    res.json({type:"DELETE"})
})

server.patch('/',(req,res)=>{
    res.json({type:"PATCH"})
})


server.get('/',(req,res)=>{
    res.json(data);
    // res.send('<h1>Hello</h1>')
})


server.listen(port,()=>{
    console.log(`Server is running at ${port}`);
});
