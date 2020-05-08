const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Please add a course title',
  },
  description: {
    type: String,
    required: 'Please add a description',
  },
  weeks: {
    type: String,
    required: 'Please add a number of weeks',
  },
  tuition: {
    type: Number,
    required: 'Please add a tuition cost',
  },
  minimumSkill: {
    type: String,
    required: 'Please add a minimum skill',
    enum: ['beginner', 'intermediate', 'advanced'],
  },
  scolarshipAvailable: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  bootcamp: {
    type: mongoose.Schema.ObjectId,
    ref: 'Bootcamp',
    required: true,
  },
});

module.exports = mongoose.model('Course', CourseSchema);
