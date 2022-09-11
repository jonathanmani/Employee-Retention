const mongoose = require("mongoose");

const employmentHistorySchema = new mongoose.Schema({
    startDate: Date,
    endDate: Date,
    accomplishments: [String],
    jobTitle: [String],
    company: String,
    industry: [String],
});

const Company = mongoose.model('Company', employmentHistorySchema);

module.exports = Company;