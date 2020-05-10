const express = require('express');
const asyncHandler = require('../middleware/async');
const {
  getReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviewsController');
const { protect, authorize } = require('../middleware/auth');

const Review = require('../models/Review');
const advancedResults = require('../middleware/advancedResults');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(
    advancedResults(Review, {
      path: 'bootcamp',
      select: 'name description',
    }),
    asyncHandler(getReviews)
  )
  .post(
    asyncHandler(protect),
    authorize('user', 'admin'),
    asyncHandler(addReview)
  );

router
  .route('/:id')
  .get(asyncHandler(getReview))
  .put(
    asyncHandler(protect),
    authorize('user', 'admin'),
    asyncHandler(updateReview)
  )
  .delete(
    asyncHandler(protect),
    authorize('user', 'admin'),
    asyncHandler(deleteReview)
  );

module.exports = router;
