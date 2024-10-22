const express = require('express');
const userConteroller = require('../controller/user');

const router = express.Router();

router
.get('/',userConteroller.getAllProducts)
.get("/:id", userConteroller.getSpecifinProduct)
.post("/", userConteroller.addingProduct)
.put("/:id", userConteroller.updatingProdcut)
.delete("/", userConteroller.deletingProduct)
.patch("/:id", userConteroller.patchingProduct);

exports.routes = router;