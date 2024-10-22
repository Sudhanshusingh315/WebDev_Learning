// Using file module

const fs = require('fs');

fs.readFile("./chapter_1/demo.txt",'utf-8',(error,txt)=>{
    console.log(`value of error is ${error}`,txt);

});