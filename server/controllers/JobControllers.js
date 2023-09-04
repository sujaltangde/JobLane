const Job = require('../models/JobModel')
const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const { createToken } = require('../middlewares/auth')
const cloudinary = require('cloudinary')
const mongoose = require('mongoose')

exports.createJob = async (req, res) => {
    try {

        const { title, description, companyName, location, companyLogo, skillsRequired, salary, category, employmentType } = req.body;


        // I will add cloudinary later
        const myCloud = await cloudinary.v2.uploader.upload(companyLogo, {
            folder: 'logo',

            crop: "scale",
        })



        const newJob = await Job.create(
            {
                title,
                description,
                companyName,
                companyLogo: {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                },
                location,
                skillsRequired,
                category,
                salary,
                employmentType,
                postedBy: req.user._id

            }
        )

        res.status(200).json({
            success: true,
            message: "Job created successfully",
            newJob
        })


    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


exports.allJobs = async (req, res) => {
    try {

        const Jobs = await Job.find();

        res.status(200).json({
            success: true,
            Jobs
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


exports.oneJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);

        res.status(200).json({
            success: true,
            job
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


exports.saveJob = async (req, res) => {
    try {

        const user = await User.findById(req.user._id);

        const JobId = req.params.id;

        if (user.savedJobs.includes(JobId)) {

            const jobIdObjectId = new mongoose.Types.ObjectId(JobId); // Convert JobId to ObjectId
            const arr = user.savedJobs.filter(jobid => jobid.toString() !== jobIdObjectId.toString());

            user.savedJobs = arr;
            await user.save();

            res.status(200).json({
                success: true,
                message: "Job UnSaved"
            })

        } else {
            user.savedJobs.push(JobId);
            await user.save();
            res.status(200).json({
                success: true,
                message: "Job saved"
            })
        }

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}