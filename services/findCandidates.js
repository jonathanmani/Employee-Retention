const MatCan = require('../models/MatCan');

const findCandidates = (replacement) => {
  const jobTitles = replacement.allowedJobTitles;
  const candidates = MatCan.find({});
  const suitableCandidates = [];
  for(let i = 0; i < candidates.length; i++){
      for(let j = 0; j < candidates[i].allowedJobTitles.length; j++){
        if(jobTitles.includes(candidates[i].allowedJobTitles[j])){
          suitableCandidates.push(rep);
        }
      }
  }
  return suitableCandidates;
};

exports.default = { findCandidates };
