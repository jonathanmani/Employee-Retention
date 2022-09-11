const mongoose = require("mongoose");

const employmentHistorySchema = new mongoose.Schema({
    startDate: Date,
    endDate: Date,
    accomplishments: [String],
    jobTitle: [String],
    company: String,
    industry: [String],
    user: {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
});

const EmploymentHistory = mongoose.model('EmploymentHistory', employmentHistorySchema);

module.exports = EmploymentHistory;