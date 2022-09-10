const mongoose = require('mongoose');

const HRBrokerSchema = new mongoose.Schema({
    startDate: Date,
    endDate: Date,
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    allowedJobTitles: [String],


});

const HRBroker = mongoose.model('HRBroker', HRBrokerSchema);

module.exports = HRBroker;