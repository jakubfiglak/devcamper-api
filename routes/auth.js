const express = require('express');
const asyncHandler = require('../middleware/async');
const { protect } = require('../middleware/auth');
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
} = require('../controllers/authController');

const router = express.Router();

router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));
router.get('/me', asyncHandler(protect), asyncHandler(getMe));
router.put(
  '/updatedetails',
  asyncHandler(protect),
  asyncHandler(updateDetails)
);
router.post('/forgotpassword', asyncHandler(forgotPassword));
router.put('/resetpassword/:resettoken', asyncHandler(resetPassword));
router.put(
  '/updatepassword',
  asyncHandler(protect),
  asyncHandler(updatePassword)
);

module.exports = router;
