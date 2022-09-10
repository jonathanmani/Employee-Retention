const express = require('express');
const authRouter = express.Router();

const {
  getUserDetails
} = require('../controllers/user'); 

authRouter.route('/:id').get( getUserDetails);

module.exports = authRouter;
