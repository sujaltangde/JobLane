const mongoose = require('mongoose') ;

const JobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    skillsRequired: [{
        type: String
    }],
    category:{
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        enum: ['full-time','part-time','contract','internship'],
        default: 'full-time'
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status:{
        type: String,
        enum: ['active','closed']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Job = mongoose.model('Job', JobSchema);
module.exports = Job  ;