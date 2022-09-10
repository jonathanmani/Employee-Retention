const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
