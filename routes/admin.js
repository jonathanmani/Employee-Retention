const express = require('express');
const adminRouter = express.Router();

// const {
//   createNewAdmin
// } = require('../controllers/admin');

// // create new admin
adminRouter.route('/').post();

module.exports = adminRouter
