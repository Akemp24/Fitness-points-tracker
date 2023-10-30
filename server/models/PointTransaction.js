// import required modules
const mongoose = requre('mongoose');
const bcrypt = require('bcrypt');

// define user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    points: {
        type: Number,
    },
});