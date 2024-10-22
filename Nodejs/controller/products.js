// const fs = require('fs');
// const products = JSON.parse(fs.readFileSync("../chapter_3/data.json","utf-8"));
// const data = products.products;
const mongoose = require('mongoose');
const model = require('../model/product')
const Product = model.Product;

// Show all Products
exports.getAllProducts = async (req,res)=>{
    
    const product = await Product.find({});
    res.json(product);
   
}

exports.getSpecifinProduct = async (req,res)=>{
    let id = req.params.id;
    console.log(id);
    const product = await Product.findById(id);
    res.json(product);
    
    
}
//  Create
exports.addingProduct = async (req,res)=>{

    const product = new Product(req.body);
    // product.title = "Meowbile Phone";
    // product.price = 234;
    // product.ratings = 5;
    await product.save().then(res.json(res.body));
}

exports.updatingProdcut = async (req,res)=>{
    const id = (req.params.id);
    try{

        const product = await Product.findOneAndReplace({_id:id},req.body,{new:true})
        req.json(req.body);
    }
    catch(err){
        console.log(err);
        req.json(err);
    }
}

exports.deletingProduct = (req,res)=>{
res.json({type:'impelment delet with mongoose'})
}

exports.patchingProduct = (req,res)=>{
    res.json({type:'Impelement the path with mongoose'})
    // const id = (+req.params.id);
    // const productIndex = (data.findIndex(p=>p.id===id));
    // const preProduct = data[productIndex];
    // data.splice(productIndex,1,{...preProduct,...req.body});
    // res.send("Updated, check GET to see the data");
}