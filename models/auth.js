const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,  // Minimum length for password
    },
    username: {
        type: String,
        required: true,
        unique: true,  // Ensures no duplicate usernames
        trim: true,  // Trims whitespace
    },
    occupation: {
        type: String,
        required: true,
    },
    fieldOfStudy: {
        type: String,
        required: true,
    },
    highestEducation: {
        type: String,
        required: true,
    }
},
{ timestamps: true }
)

const User = mongoose.model('users', authSchema)

module.exports = User