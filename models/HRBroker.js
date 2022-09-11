const mongoose = require('mongoose');

const HRBrokerJobSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    },
    candidatesToReview: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    }]
});

const HRBroker = mongoose.model('Job', HRBrokerJobSchema);

module.exports = HRBroker;