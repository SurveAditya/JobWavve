const mongoose = require('mongoose');

const jobVacancySchema = new mongoose.Schema({
  creator:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  responsibilities: {
    type: Array,
    required: true
  },
  qualifications: {
    type: Array,
    required: true
  },
  skills: {
    type: Array,
    required: true
    },
  salary: {
    type: Number,
    required: true
  },
  benefits: {
    type: Array,
    required: true
  },
  contactEmail: {
    type: String,
    required: true
  },
  datePosted: {
    type: Date,
    default: Date.now
  },
  minexp: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('JobVacancy', jobVacancySchema);
