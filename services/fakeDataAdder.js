// import { faker } from '@faker-js/faker';
// or, if using CommonJS
const {
    faker
} = require('@faker-js/faker');
const connectDB = require("../config/db");
const User = require("../models/User");
const Company = require('../models/Company');
const Skill = require("../models/Skill");
const MatRep = require("../models/MatRep");
const MatCan = require("../models/MatCan");

require('dotenv').config({
    path: './config.env'
});

connectDB()

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


const AddCompany = async (count) => {
    for (let i = 0; i < count; i++) {
        let name = faker.company.companyName();
        let randomIndustryCount = Math.floor(Math.random() * 10);
        let industries = [];
        for (let j = 0; j < randomIndustryCount; j++) {
            industries.push(faker.company.bsNoun());
        }
        console.log(industries);
        let newCompany = await Company.create({
            name: name,
            industry: industries
        });
        await Company.create(newCompany);
    }
}

const AddSkills = async (count) => {
    for (let i = 0; i < count; i++) {
        let category = faker.company.bsAdjective();
        let label = faker.company.bsAdjective();
        await Skill.create({
            category: category,
            label: label
        });
    }
}
const AddUser = async (count) => {
    const roles = ["Admin", "User", "HR"]
    const candidateTypes = ["MatCan", "MatRep"]
    for (let i = 0; i < count; i++) {
        let fname = faker.name.firstName();
        let lname = faker.name.lastName();
        let email = faker.internet.email();
        let password = faker.random.alphaNumeric(12);
        let job = faker.name.jobTitle();
        let role = roles[Math.floor(Math.random() * roles.length)];
        let companyResults = await Company.find({}, {
            _id: 1
        });
        let company = companyResults[Math.floor(Math.random() * companyResults.length)]
        let skillsResult = await Skill.find({}, {
            _id: 1
        });
        shuffleArray(skillsResult)
        let skill = skillsResult.slice(0, Math.floor(Math.random() * 8));
        let user = {
            firstName: fname,
            lastName: lname,
            email: email,
            password: password,
            job: job,
            role: role,
            company: company,
            skill: skill,
            candidateType: candidateTypes[Math.round(Math.random())]
        };

        await User.create(user);
    }
}


const AddMatRep = async (count) => {
    let users = await User.find({}, { _id: 1, job: 1 });
    shuffleArray(users);
    for (let i = 0; i < count; i++) {
        let startDate = randomDate(new Date(2022, 10, 01), new Date(2023, 12, 01));
        let endDate = randomDate(startDate, new Date(startDate.getFullYear() + 1, startDate.getMonth(), startDate.getDay()));
        let randomUser = users[i];
        let user = randomUser["_id"];
        let randomJobCount = Math.floor(Math.random() * 10);
        jobs = []
        for (let j = 0; j < randomJobCount; j++) {
            jobs.push(users[j]["job"]);
        }
        let jobTitle = jobs; 
        await MatRep.create({ startDate: startDate, endDate: endDate, user: user, allowedJobTitles: jobTitle })
    }
}

const AddMatCan = async (count) => {
    let users = await User.find({}, { _id: 1, job: 1 });
    shuffleArray(users);
    for (let i = 0; i < count; i++) {
        let startDate = randomDate(new Date(2022, 10, 01), new Date(2023, 12, 01));
        let endDate = randomDate(startDate, new Date(startDate.getFullYear() + 1, startDate.getMonth(), startDate.getDay()));
        let randomUser = users[i];
        let user = randomUser["_id"];
        let randomJobCount = Math.floor(Math.random() * 10);
        jobs = []
        for (let j = 0; j < randomJobCount; j++) {
            jobs.push(users[j]["job"]);
        }
        let jobTitle = jobs;
        await MatCan.create({ startDate: startDate, endDate: endDate, user: user, allowedJobTitles: jobTitle })
    }
}
AddCompany(100);
AddSkills(100);
AddUser(100);
AddMatCan(100);
AddMatRep(100);

const f = async () => {
    let a = await MatCan.deleteMany({});
    console.log(a);
    let b = await MatRep.deleteMany({});
    console.log(b);
}

// f()