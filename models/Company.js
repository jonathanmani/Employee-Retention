const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  industry: [String],
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
