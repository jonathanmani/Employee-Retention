const express = require('express');
const hrBrokerRouter = express.Router();

const { createHrBroker } = require('../controllers/hrBroker');

// create new HR broker
hrBrokerRouter.route('/').post(createHrBroker);
