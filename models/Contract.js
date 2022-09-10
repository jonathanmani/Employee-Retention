const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
});

const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;
