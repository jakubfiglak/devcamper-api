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
const { protect, authorize } = require('../middleware/auth');

// Include other resource routers
const courseRouter = require('./courses');
const reviewRouter = require('./reviews');

const router = express.Router();

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);
router.use('/:bootcampId/reviews', reviewRouter);

router
  .route('/')
  .get(advancedResults(Bootcamp, 'courses'), asyncHandler(getBootcamps))
  .post(
    asyncHandler(protect),
    authorize('publisher', 'admin'),
    asyncHandler(createBootcamp)
  );

router
  .route('/:id')
  .get(asyncHandler(getBootcamp))
  .put(
    asyncHandler(protect),
    authorize('publisher', 'admin'),
    asyncHandler(updateBootcamp)
  )
  .delete(
    asyncHandler(protect),
    authorize('publisher', 'admin'),
    asyncHandler(deleteBootcamp)
  );

router
  .route('/radius/:zipcode/:distance')
  .get(asyncHandler(getBootcampsInRadius));

router
  .route('/:id/photo')
  .put(
    asyncHandler(protect),
    authorize('publisher', 'admin'),
    asyncHandler(bootcampPhotoUpload)
  );

module.exports = router;
