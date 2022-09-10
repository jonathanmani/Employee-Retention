const express = require('express');
const authRouter = express.Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
} = require('../controllers/auth');

authRouter.route('/register').post(register);

authRouter.route('/login').post(login);

authRouter.route('/forgotpassword').post(forgotpassword);

authRouter.route('/passwordreset/:resetToken').put(resetpassword);

module.exports = authRouter;
