const express = require('express');
const asyncHandler = require('../middleware/async');
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcampsController');

const router = express.Router();

router
  .route('/')
  .get(asyncHandler(getBootcamps))
  .post(asyncHandler(createBootcamp));

router
  .route('/:id')
  .get(asyncHandler(getBootcamp))
  .put(asyncHandler(updateBootcamp))
  .delete(asyncHandler(deleteBootcamp));

module.exports = router;
