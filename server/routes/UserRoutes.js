const express = require('express')
const { register, login, isLogin, me, changePassword, updateProfile, deleteAccount } = require('../controllers/UserControllers')
const {isAuthenticated} = require('../middlewares/auth')
const router = express.Router() 


router.route("/register").post(register) ;
router.route("/login").post(login) ;
router.route("/isLogin").get(isAuthenticated, isLogin) ; 
router.route("/me").get(isAuthenticated, me) ; 
router.route("/changePassword").put(isAuthenticated, changePassword) ; 
router.route("/updateProfile").put(isAuthenticated, updateProfile) ; 
router.route("/deleteAccount").put(isAuthenticated, deleteAccount) ; 



module.exports = router