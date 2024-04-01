const router  = require("express").Router();
const userController = require("../controller/userContoller")

// api starts wiht api/user
// register the user
router.post('/',userController.loginUser)
router.post('/register',userController.registerUser)
exports.router  = router;
