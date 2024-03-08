const express = require("express");
const router = express.Router();
const userController = require("../Controller/useController");
const postController = require("../Controller/postController");
// Creating a user
router.post("/User", userController.createUser);

// Adding posts the user had made
router.post("/posts", postController.postContent);

router.get("/User", userController.getMyUser);

exports.routes = router;
