const router = require('express').Router();
const protect = require("../middleware/authMiddleware")
const authController = require('../controllers/userControllers')
router.post('/auth',authController.authUser);


// api starts with /api/user

router.post("/",authController.registerUser);
router.post("/auth",authController.authUser);
router.post('/logout',authController.logoutUser);
// make a note of this
router.route('/profile').get(protect,authController.getUserProfile).put(protect,authController.updateUserProfile)


// this useually includes with the . 
exports.router = router;