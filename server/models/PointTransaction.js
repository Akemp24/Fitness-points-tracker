// import required modules
const mongoose = requre('mongoose');

// define pointTransaction schema
const pointTransactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    description: {
        type: String,
        required: true,
    },
    pointsChange: {
        type: Number,
    },
    date: {
        type: Date,
    }
});

// define model
const pointTransaction = mongoose.model('PointTransaction', pointTransactionSchema);

// export model
module.exports = pointTransaction;