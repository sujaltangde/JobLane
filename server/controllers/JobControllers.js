const User = require('../models/JobModel')
const bcrypt = require('bcrypt')
const { createToken } = require('../middlewares/auth')
const cloudinary = require('cloudinary')

exports.createJob = async (req,res) => {
    try{

        res.status(200).json({
            success: true,
            job:"job"
        })


    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}