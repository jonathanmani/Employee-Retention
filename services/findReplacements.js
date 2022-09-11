const MatCan = require('../models/MatCan');
const MatRep = require("../models/MatRep");

const findReplacements = async (candidate) => {
  const jobTitles = candidate.allowedJobTitles;
  const industries = candidate.industry;
  const yoe = candidate.yearsOfExperience;
  const reps = await MatRep.find({}).lean().exec();
  const suitableReps = [];
  for (let i = 0; i < reps.length; i++) {
    let doesTitleMatch = false;
    let doesIndustryMatch = false;
    for (let j = 0; j < reps[i].allowedJobTitles.length; j++) {
      if (jobTitles.indexOf(reps[i].allowedJobTitles[j]) !== -1) {
        doesTitleMatch = true;
      }
      for (industry in reps[i].industries) {
        if (industries.indexOf(industry) !== -1) {
          doesIndustryMatch = true;
        }
      }
    }
    if (doesTitleMatch && doesIndustryMatch) {
      if (reps[i].yearsOfExperience >= yoe) {
        reps[i].match = Math.random() * 18 + 80;
      } else {
        reps[i].match = Math.random() * 20 + 70;
      }
      suitableReps.push(reps[i]);
    }

  }
  return suitableReps;
};

module.exports = findReplacements