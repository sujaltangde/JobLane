const Job = require('../models/JobModel')
const User = require('../models/UserModel')
const Application = require('../models/AppModel')

const mongoose = require('mongoose')


// Creates a new application
exports.createApplication = async (req, res) => {
    try {

        const job = await Job.findById(req.params.id);
        const user = await User.findById(req.user._id);

        if (user.appliedJobs.includes(job._id)) {
            return res.status(400).json({
                success: false,
                message: "you are already applied"
            })
        }

        const application = await Application.create(
            {
                job: job._id,
                applicant: user._id,
                applicantResume: {
                    public_id: user.resume.public_id,
                    url: user.resume.url
                }
            }
        )
        user.appliedJobs.push(job._id)
        await user.save();

        res.status(200).json({
            success: true,
            message: "Application created",
            application
        })


    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }

}


// Get a single application
exports.getSingleApplication = async (req, res) => {
    try {
        const application = await Application.findById(req.params.id).populate('job applicant');

        res.status(200).json({
            success: true,
            application
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


// Gets all applications of an user
exports.getUsersAllApplications = async (req, res) => {
    try {
        const allApplications = await Application.find({ applicant: req.user._id }).populate('job')
            .populate('applicant');

        res.status(200).json({
            success: true,
            allApplications
        })


    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// Delete application 
exports.deleteApplication = async (req, res) => {
    try {

        const user = await User.findById(req.user._id);
       
        const applicationId = req.params.id;     

        const application = await Application.findById(req.params.id) 
        

        if(!application){
            return res.status(400).json({
                success: false,
                message: "Application already deleted"
            })
        }
       
        const applicationToDelete = await Application.findByIdAndRemove(applicationId);
       
        const jobId = application.job
        const MongooseObjectId = new mongoose.Types.ObjectId(jobId)

        const newAppliedJobs = user.appliedJobs.filter((e) => (
            e.toString() !== MongooseObjectId.toString()
        ))
    
        
        user.appliedJobs = newAppliedJobs;


        await user.save();

        res.status(200).json({
            success: true,
            message: "Application deleted"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }

}