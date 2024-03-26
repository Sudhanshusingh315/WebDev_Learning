const router = require('express').Router();
const authController = require('../controllers/userControllers')
router.post('/auth',authController.authUser);


// api starts with /api/user

router.post("/",authController.registerUser);
router.post("/auth",authController.authUser);
router.post('/logout',authController.logoutUser);
// make a note of this
router.route('/profile').get(authController.getUserProfile).put(authController.updateUserProfile)


// this useually includes with the . 
exports.router = router;