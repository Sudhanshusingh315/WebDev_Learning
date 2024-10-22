const express = require("express");
const router = express.Router();
const mongooseController = require("../controller/Controller");
const rightController = require("../controller/rightController");
// setting up router
router.post("/staff/create", mongooseController.createDoc);

router.post("/right/create", rightController.createRight);
router.post("/right/getData", rightController.getStaffData);
// you can do this

// module.exports = router;

// or you can do this
exports.routes = router;
