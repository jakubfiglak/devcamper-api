const express = require('express');
const asyncHandler = require('../middleware/async');
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/coursesController');

const router = express.Router({ mergeParams: true });

router.route('/').get(asyncHandler(getCourses)).post(asyncHandler(addCourse));
router
  .route('/:id')
  .get(asyncHandler(getCourse))
  .put(asyncHandler(updateCourse))
  .delete(asyncHandler(deleteCourse));

module.exports = router;
