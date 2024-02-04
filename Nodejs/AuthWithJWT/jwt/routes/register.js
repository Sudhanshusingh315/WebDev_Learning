const express = require("express");
const { registerUser, testUser } = require("../controller/registerControler");
const router = express.Router();

router.get("/", testUser);
router.post("/", registerUser);
module.exports = router;
