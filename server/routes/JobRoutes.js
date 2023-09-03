const express = require('express')
const { isAuthenticated } = require('../middlewares/auth')

const router = express.Router()


router.route("/create/job").post(isAuthenticated)

module.exports = router ;