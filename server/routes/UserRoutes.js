const express = require('express')
const { register, login, isLogin, me, changePassword, updateProfile } = require('../controllers/UserControllers')
const {isAuthenticated} = require('../middlewares/auth')
const router = express.Router() 


router.route("/register").post(register) ;
router.route("/login").post(login) ;
router.route("/isLogin").get(isAuthenticated, isLogin) ; 
router.route("/me").get(isAuthenticated, me) ; 
router.route("/changePassword").put(isAuthenticated, changePassword) ; 
router.route("/updateProfile").put(isAuthenticated, updateProfile) ; 

// Two user routes remains (cloudinary) 1) edit resume, 2) edit avatar (include it in updateProfile)

module.exports = router