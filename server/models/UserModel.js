const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({

    
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Enter valid email address"],
        unique: true
    },
    
    password: {
        type: String,
        required: [true, "Please enter a password"]
    },
    
    avatar: {
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
        enum: ["applicant", "admin"],
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
    
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const User = mongoose.model('User', UserSchema)
module.exports = User