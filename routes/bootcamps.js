const express = require('express');
const asyncHandler = require('../middleware/async');
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  bootcampPhotoUpload,
} = require('../controllers/bootcampsController');
const Bootcamp = require('../models/Bootcamp');
const advancedResults = require('../middleware/advancedResults');
const { protect } = require('../middleware/auth');

// Include other resource routers
const courseRouter = require('./courses');

const router = express.Router();

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router
  .route('/')
  .get(advancedResults(Bootcamp, 'courses'), asyncHandler(getBootcamps))
  .post(asyncHandler(protect), asyncHandler(createBootcamp));

router
  .route('/:id')
  .get(asyncHandler(getBootcamp))
  .put(asyncHandler(protect), asyncHandler(updateBootcamp))
  .delete(asyncHandler(protect), asyncHandler(deleteBootcamp));

router
  .route('/radius/:zipcode/:distance')
  .get(asyncHandler(getBootcampsInRadius));

router
  .route('/:id/photo')
  .put(asyncHandler(protect), asyncHandler(bootcampPhotoUpload));

module.exports = router;
