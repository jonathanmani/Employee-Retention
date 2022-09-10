const express = require('express');
const userRouter = express.Router();

<<<<<<< HEAD
const {
    getUserDetails
} = require('../controllers/candidate');

// Get a user for profile page 
userRouter.route("/:id").get(getUserDetails)

// Get Employee's type - matcan or matrep
userRouter.route("/type/:id").get(getEmployeeDetails) 

// Get all candidates a replacement can apply for
userRouter.route("option/candidate").get(getAvailableCandidates)

// Get all replacements for a candidate
userRouter.route("option/replacement").get(getAvailableReplacement)
=======
const { getUserDetails } = require('../controllers/user');

// Get a user for profile page
userRouter.route('/:id').get(getUserDetails);

// Get all candidates a replacement can apply for
userRouter.route('option/candidate/:id').get(getAvailableCandidates);

// Get all replacements for a candidate
// userRouter.route('option/replacement').get(getAvailableReplacement);

module.exports = userRouter;
>>>>>>> e7d3ebd (temp commit)

// Main flow

// Get User based on login id -> Check if they are matcan or matrep -> Depending on this if it is matcan -> get all replacements [Skills, Job Title, Employment History [Job Title, Company, Start and end date, accomplisments]]

// If logged in user is MatRep
// Return a list of available jobs for the candidate based on the job titles they are interested in

/*
User
- First Name, last name, password, date of birth
Employee[User]
- Job title, CandidateType, Role, Department,
- MatRep[Employee]
    - Job Title, Start Date, End date
- MatCan
    - Start date, end date
*/
