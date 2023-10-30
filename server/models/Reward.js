// import required modules
const mongoose = requre('mongoose');

// define reward schema
const rewardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    pointsRequired: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {

    },
    category: {
        type: String,
        required: true,
    },
});

// define model
const Reward = mongoose.model('Reward', rewardSchema);

// export model
module.exports = Reward;