const express = require('express');
const producConteroller = require("../controller/products");
const router = express.Router();

router
  .get("/", producConteroller.getAllProducts)
  .get("/:id", producConteroller.getSpecifinProduct)
  .post("/", producConteroller.addingProduct)
  .put("/:id", producConteroller.updatingProdcut)
  .delete("/", producConteroller.deletingProduct)
  .patch("/:id", producConteroller.patchingProduct);

exports.routes = router;  