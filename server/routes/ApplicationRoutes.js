const express = require('express')
const {isAuthenticated} = require('../middlewares/auth')
const {createApplication, getSingleApplication, getUsersAllApplications, deleteApplication} = require('../controllers/ApplicationControllers')
const {applicationIdValidator,validateHandler} = require('../middlewares/validators');
const router = express.Router()


router.route('/createApplication/:id').post(isAuthenticated,applicationIdValidator(),validateHandler, createApplication)

router.route('/singleApplication/:id').get(isAuthenticated,applicationIdValidator(),validateHandler, getSingleApplication)

router.route('/getAllApplication').get(isAuthenticated, getUsersAllApplications)

router.route('/deleteApplication/:id').delete(isAuthenticated,applicationIdValidator(),validateHandler, deleteApplication)


module.exports = router 