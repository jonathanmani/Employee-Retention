const MatCan = require('../models/MatCan');
const MatRep = require("../models/MatRep");

const findReplacements = async (candidate) => {
  const jobTitles = candidate.allowedJobTitles;
  const reps = await MatRep.find({}).lean().exec();
  const suitableReps = [];
  for (let i = 0; i < reps.length; i++) {
    for (let j = 0; j < reps[i].allowedJobTitles?.length; j++) {
      if (jobTitles.indexOf(reps[i].allowedJobTitles[j]) !== -1) {
        reps[i].match = Math.random() * 20 + 80;
        suitableReps.push(reps[i]);
      }
    }
  }
  return suitableReps;
};

module.exports = findReplacements


