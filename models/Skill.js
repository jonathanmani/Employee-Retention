const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  category: String,
  label: String,
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;