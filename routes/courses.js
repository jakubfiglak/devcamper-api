const express = require('express');
const asyncHandler = require('../middleware/async');
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/coursesController');

const Course = require('../models/Course');
const advancedResults = require('../middleware/advancedResults');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(
    advancedResults(Course, {
      path: 'bootcamp',
      select: 'name description',
    }),
    asyncHandler(getCourses)
  )
  .post(asyncHandler(addCourse));

router
  .route('/:id')
  .get(asyncHandler(getCourse))
  .put(asyncHandler(updateCourse))
  .delete(asyncHandler(deleteCourse));

module.exports = router;
