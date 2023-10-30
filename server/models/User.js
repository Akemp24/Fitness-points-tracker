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
    }
});

// define prehook method to hash password

// define method to compare and validate password

// define user model
const User = mongoose.model('User', userSchema);

// export user model
module.exports = User;