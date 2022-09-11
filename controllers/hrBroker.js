const Job = require("../models/Job");
const Company = require("../models/Company");
const HRBroker = require("../models/HRBroker");
const User = require("../models/User");

exports.createHrBroker = async (req, res) => {
    try{
        const {
            user,
            jobsToReview
        } = req.body;
        const existingUser = User.findById(req.body.user);
        if(existingUser && jobsToReview){
           User.updateOne({id: user}, {"$set": {jobsToReview}}) 
        }
        if (jobsToReview) {
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
