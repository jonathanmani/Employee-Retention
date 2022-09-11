const express = require('express');
const jobsRouter = express.Router();

const { getJobs, getJobDetails, createJob } = require('../controllers/job');

// get all jobs
jobsRouter.route('').get(getJobs);

// get job by id
jobsRouter.route('/:id').get(getJobDetails);

// create new job
jobsRouter.route('/').post(createJob);

module.exports = jobsRouter;