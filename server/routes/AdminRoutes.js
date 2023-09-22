const express = require("express")
const {getAllJobs, getAllUsers, getAllApp, updateApplication, deleteApplication, updateUser, deleteUser, getApplication, getUser, getJob, updateJob, deleteJob} = require('../controllers/AdminControllers')
const {isAuthenticated, authorizationRoles} = require('../middlewares/auth')

const router = express.Router() ;

router.route("/admin/allJobs").get(isAuthenticated ,authorizationRoles("admin") , getAllJobs)
router.route("/admin/allUsers").get(isAuthenticated ,authorizationRoles("admin") , getAllUsers)
router.route("/admin/allApp").get(isAuthenticated ,authorizationRoles("admin") , getAllApp)

router.route("/admin/getApplication/:id").get(isAuthenticated ,authorizationRoles("admin") , getApplication)
router.route("/admin/updateApplication/:id").put(isAuthenticated ,authorizationRoles("admin") , updateApplication)
router.route("/admin/deleteApplication/:id").delete(isAuthenticated ,authorizationRoles("admin") , deleteApplication)

router.route("/admin/getUser/:id").get(isAuthenticated ,authorizationRoles("admin") , getUser)
router.route("/admin/updateUser/:id").put(isAuthenticated ,authorizationRoles("admin") , updateUser)
router.route("/admin/deleteUser/:id").delete(isAuthenticated ,authorizationRoles("admin") , deleteUser)

router.route("/admin/getJob/:id").get(isAuthenticated ,authorizationRoles("admin") , getJob)
router.route("/admin/updateJob/:id").put(isAuthenticated ,authorizationRoles("admin") , updateJob)
router.route("/admin/deleteJob/:id").delete(isAuthenticated ,authorizationRoles("admin") , deleteJob)



module.exports = router ;