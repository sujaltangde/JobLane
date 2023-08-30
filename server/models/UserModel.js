const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "Please enter your first name"]
    },
    
    lastName: {
        type: String,
        required: [true, "Please enter your last name"]
    },
    
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Enter valid email address"]
    },
    
    password: {
        type: String,
        required: [true, "Please enter a password"]
    },
    
    avtar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    
    role: {
        type: String,
        enum: ["applicant", "employer", "admin"],
        default: "applicant"
    },
    
    skills: [
        {
            type: String
        }
    ],

    resume: {
        public_id: {
            type: String,
            required: false
        },
        url: {
            type: String,
            required: false
        },

    },
    
    company: {
        type: String,
        required: false
    },

    website: {
        type: String,
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

const User = mongoose.model('User', UserSchema)
module.exports = User