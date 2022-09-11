const mongoose = require('mongoose');

const MatCanSchema = new mongoose.Schema({
    startDate: Date,
    endDate: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    allowedJobTitles: [String],
    
});

const MatCan = mongoose.model('MatCan', MatCanSchema);

module.exports = MatCan;