const HRBroker = require("../models/HRBroker");

const createHrBroker = async (req, res) => {
    try{
        const {user} = req.body;
        const existingBroker = HRBroker.findById(user);
        if(!existingBroker){
            const newBroker = await HRBroker.create({user: user, candidatesToReview: []})
            res.json(newBroker).status(201);
        }
    }catch(err){
        res.status(400);
    }
}


const reviewJob = async (req, res) => {
    try{
        const {
            user,
            jobsToReview
        } = req.body;
        const existingUser = HRBroker.findById(req.params.id);
        if(existingUser && jobsToReview){
           for(job in jobsToReview){
            existingUser.candidatesToReview.push(job);
           }
           res.json(existingUser).status(201);
        }
        else if (jobsToReview) {
            const review = await HRBroker.create({
                user: user,
                jobsToReview: jobsToReview
            });
            res.json(review).status(201);
        }
    }catch(err){
        res.status(403)
    }
}

module.exports = {
    createHrBroker,
    reviewJob
}