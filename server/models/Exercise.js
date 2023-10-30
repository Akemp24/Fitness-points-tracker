// import required modules
const mongoose = requre('mongoose');
const bcrypt = require('bcrypt');

// define user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    pointsEarned: {
        type: Number,
        required: true,
    },
    dateLogged: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});