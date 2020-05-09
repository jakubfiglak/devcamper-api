const express = require('express');
const asyncHandler = require('../middleware/async');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/usersController');
const User = require('../models/User');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });

router.use(asyncHandler(protect));
router.use(authorize('admin'));

router
  .route('/')
  .get(asyncHandler(advancedResults(User)), asyncHandler(getUsers))
  .post(asyncHandler(createUser));

router
  .route('/:id')
  .get(asyncHandler(getUser))
  .put(asyncHandler(updateUser))
  .delete(asyncHandler(deleteUser));

module.exports = router;
