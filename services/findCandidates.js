const MatCan = require('../models/MatCan');
const findCandidates = async (candidate) => {
    console.log(candidate);
    const jobTitles = candidate.allowedJobTitles;
    console.log(jobTitles);
    const candidates = await MatCan.find({}).lean().exec();
    console.log(candidates.length)
    const suitableCandidates = [];
    for (let i = 0; i < candidates.length; i++) {
        for (let j = 0; j < candidates[i].allowedJobTitles?.length; j++) {
            if (jobTitles.indexOf(candidates[i].allowedJobTitles[j]) !== -1) {
                candidates[i].match = Math.random() * 20 + 80;
                suitableCandidates.push(candidates[i]);
            }
        }
    }
    return suitableCandidates;
};

module.exports = findCandidates

