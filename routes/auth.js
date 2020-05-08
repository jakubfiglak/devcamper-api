const express = require('express');
const asyncHandler = require('../middleware/async');
const { register } = require('../controllers/authController');

const router = express.Router();

router.post('/register', asyncHandler(register));

module.exports = router;
