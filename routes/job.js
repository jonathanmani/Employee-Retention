const express = require('express');
const jobRouter = express.Router();

const { createHrBroker, getJobs,getJobDetails,createJob } = require('../controllers/hrBroker');

// get all jobs
jobRouter.router('/').get(getJobs);

// get job by id
jobRouter.router('/:id').get(getJobDetails);

// create new job
jobRouter.route('/').post(createJob);

module.exports = jobRouter