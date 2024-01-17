const fs = require('fs');
const products = JSON.parse(fs.readFileSync("../chapter_3/data.json","utf-8"));
const data = products.users;
// const model = require('../model/product')
// const Product = model.Product;
exports.getAllProducts = (req,res)=>{
   res.json(data) 
}

exports.getSpecifinProduct = (req,res)=>{
    let id = req.params.id;
    let requestedProduct = data.find(p=>p.id===(+id));
    res.json(requestedProduct);
    
}

exports.addingProduct = (req,res)=>{
    console.log(req.body);
    data.push(req.body);
    res.json(req.body);
    
}

exports.updatingProdcut = (req,res)=>{
    const id = (+req.params.id);
    console.log(typeof(id),id);
    const productIndex = (data.findIndex(p=>p.id===id));
    data.splice(productIndex,1,{...req.body, id:id}) 
    res.send("Value updated, run GET method to check")
}

exports.deletingProduct = (req,res)=>{
    res.json({type:'DELETE'})
}

exports.patchingProduct = (req,res)=>{
    res.json({type:'PATCH'})
    const id = (+req.params.id);
    const productIndex = (data.findIndex(p=>p.id===id));
    const preProduct = data[productIndex];
    data.splice(productIndex,1,{...preProduct,...req.body});
    res.send("Updated, check GET to see the data");
}
