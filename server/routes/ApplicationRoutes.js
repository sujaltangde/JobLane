const express = require('express')
const {isAuthenticated} = require('../middlewares/auth')
const {createApplication, getSingleApplication, getUsersAllApplications} = require('../controllers/ApplicationControllers')

const router = express.Router()


router.route('/createApplication/:id').post(isAuthenticated, createApplication)

router.route('/singleApplication/:id').get(isAuthenticated, getSingleApplication)

router.route('/getAllApplication').get(isAuthenticated, getUsersAllApplications)


module.exports = router 