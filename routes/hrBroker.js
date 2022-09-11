const express = require('express');
const hrBrokerRouter = express.Router();

const { createHrBroker, reviewJob } = require('../controllers/hrBroker');

// create new HR broker
hrBrokerRouter.route('/').post(createHrBroker);


// Send job for review to HR Broker
hrBrokerRouter.route("/review").post(reviewJob);
