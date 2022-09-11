const Job = require("../models/Job");

const getJobs = async (req, res) => {
    const jobs = await Job.find({});
    if (!jobs) {
        res.json([]);
    }
    res.json(jobs)
}

const getJobDetails = async (req, res) => {
    const job = await Job.findById(req.params.id);
    if (!job) {
        res.status(404).end()
    }
    res.json(job);
}

const createJob = async (req, res) => {

    try {
        const { title, description, company, user } = req.body;
        const companyUser = User.find({ company: company, user: user });
        if (!companyUser) {
            res.status(403).json({ message: "User must belong to the company for which job is created." })
        }
        const createdJob = await Job.create({ title: title, description: description, company: company });
        res.status(201).json(createdJob);
    } catch (err) {
        res.status(400).end();
    }
}

module.exports = {
    getJobs,
    getJobDetails,
    createJob,
}