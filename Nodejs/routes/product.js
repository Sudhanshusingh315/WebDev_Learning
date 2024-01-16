const express = require('express');
const producConteroller = require("../controller/products");
const Router = express.Router();

Router
  .get("/products", producConteroller.getAllProducts)
  .get("/products/:id", producConteroller.getSpecifinProduct)
  .post("/", producConteroller.addingProduct)
  .put("/products/:id", producConteroller.updatingProdcut)
  .delete("/", producConteroller.deletingProduct)
  .patch("/products/:id", producConteroller.patchingProduct);

exports.routes = Router;  