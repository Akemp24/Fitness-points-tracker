// import required modules
const mongoose = requre('mongoose');

// define exercise schema
const exerciseSchema = new mongoose.Schema({
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

// define exercise model
const Exercise = mongoose.model('Exercise', exerciseSchema);

// export exercise model
module.exports = Exercise;