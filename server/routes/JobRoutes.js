const express = require('express')
const { isAuthenticated, authorizationRoles } = require('../middlewares/auth')
const {createJob, allJobs, oneJob, saveJob} = require('../controllers/JobControllers')

const router = express.Router()


router.route("/create/job").post(isAuthenticated, authorizationRoles("admin") , createJob)

router.route("/jobs").get(allJobs) ;

router.route("/job/:id").get(oneJob) ;

router.route("/saveJob/:id").put(isAuthenticated,saveJob) ;

module.exports = router ;