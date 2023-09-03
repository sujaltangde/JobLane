const express = require('express')
const { isAuthenticated, authorizationRoles } = require('../middlewares/auth')
const {createJob} = require('../controllers/JobControllers')

const router = express.Router()


router.route("/create/job").post(isAuthenticated, authorizationRoles("admin") , createJob)

module.exports = router ;