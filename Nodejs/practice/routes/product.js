const express = require('express');
const router = express.Router()
const productController = require('../controller/product')



router
  .get("/", productController.getAllData)
  .post("/", productController.createAData)
  .put("/:id", productController.updateData)
  .delete("/:id", productController.deleteData);

exports.router = router;