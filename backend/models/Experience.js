const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  current: {
    type: Boolean,
    default: false,
  },
  description: [{
    type: String,
  }],
  skills: [{
    type: String,
  }],
  order: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Experience', experienceSchema); 