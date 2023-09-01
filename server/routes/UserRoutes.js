const express = require('express')
const { register, login, isLogin, me } = require('../controllers/UserControllers')
const {isAuthenticated} = require('../middlewares/auth')
const router = express.Router() 


router.route("/register").post(register) ;
router.route("/login").post(login) ;
router.route("/isLogin").get(isAuthenticated, isLogin) ; 
router.route("/me").get(isAuthenticated, me) ; 

module.exports = router