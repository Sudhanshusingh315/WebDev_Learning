// const http = require('http');
// const fs = require('fs');
// const { resourceLimits } = require('worker_threads');

// const file = fs.readFileSync("./chapter_2/index.html","utf-8");

// const data = fs.readFileSync("./chapter_2/data.json","utf-8");



// const server = http.createServer((req,res)=>{
//     console.log("server started ");
//     switch(req.url){
//         case '/':
//             res.setHeader("Content-Type","text/html")
//             res.end(file);
//             break;
//         default:
//             break;
//     } 
//     // res.setHeader("Content-Type","application/json");
//     res.setHeader("Content-Type","text/html")
//     res.end(file);
// });

// server.listen(8080);