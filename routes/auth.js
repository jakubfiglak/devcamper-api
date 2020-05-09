const express = require('express');
const asyncHandler = require('../middleware/async');
const { protect } = require('../middleware/auth');
const { register, login, getMe } = require('../controllers/authController');

const router = express.Router();

router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));
router.get('/me', asyncHandler(protect), asyncHandler(getMe));

module.exports = router;
