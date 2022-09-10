const express = require('express');
const authRouter = express.Router();
const {protect} = require('../middleware/auth')

const {
  getUserDetails
} = require('../controllers/user'); 

authRouter.route('/').get(protect, getUserDetails);

module.exports = authRouter;
