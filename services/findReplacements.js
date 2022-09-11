const MatCan = require('../models/MatCan');

exports.findReplacements = (candidate) => {
  const jobTitles = candidate.allowedJobTitles;
  const reps = MatRep.find({});
  const suitableReps = [];
  for (let i = 0; i < reps.length; i++) {
    for (let j = 0; j < reps.allowedJobTitles.length; j++) {
      if (jobTitles.includes(reps[i].allowedJobTitles[j])) {
        suitableReps.push(jobTitles)
        continue;
      }
    }
  }
  return suitableReps;
};

