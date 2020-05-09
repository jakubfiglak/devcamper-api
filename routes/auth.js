const express = require('express');
const asyncHandler = require('../middleware/async');
const { protect } = require('../middleware/auth');
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword,
} = require('../controllers/authController');

const router = express.Router();

router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));
router.get('/me', asyncHandler(protect), asyncHandler(getMe));
router.post('/forgotpassword', asyncHandler(forgotPassword));
router.put('/resetpassword/:resettoken', asyncHandler(resetPassword));

module.exports = router;
