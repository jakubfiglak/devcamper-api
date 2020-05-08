const express = require('express');
const asyncHandler = require('../middleware/async');
const { getCourses } = require('../controllers/coursesController');

const router = express.Router({ mergeParams: true });

router.route('/').get(asyncHandler(getCourses));

module.exports = router;
