const express = require('express')
const {isAuthenticated} = require('../middlewares/auth')
const {createApplication, getSingleApplication, getUsersAllApplications, deleteApplication} = require('../controllers/ApplicationControllers')

const router = express.Router()


router.route('/createApplication/:id').post(isAuthenticated, createApplication)

router.route('/singleApplication/:id').get(isAuthenticated, getSingleApplication)

router.route('/getAllApplication').get(isAuthenticated, getUsersAllApplications)

router.route('/deleteApplication/:id').delete(isAuthenticated, deleteApplication)


module.exports = router 