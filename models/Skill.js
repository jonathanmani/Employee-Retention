const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  category: String,
  label: String,
});
