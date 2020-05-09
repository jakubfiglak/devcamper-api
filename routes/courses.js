const express = require('express');
const asyncHandler = require('../middleware/async');
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/coursesController');
const { protect } = require('../middleware/auth');

const Course = require('../models/Course');
const advancedResults = require('../middleware/advancedResults');

const router = express.Router({
  mergeParams: true,
});

router
  .route('/')
  .get(
    advancedResults(Course, {
      path: 'bootcamp',
      select: 'name description',
    }),
    asyncHandler(getCourses)
  )
  .post(asyncHandler(protect), asyncHandler(addCourse));

router
  .route('/:id')
  .get(asyncHandler(getCourse))
  .put(asyncHandler(protect), asyncHandler(updateCourse))
  .delete(asyncHandler(protect), asyncHandler(deleteCourse));

module.exports = router;
