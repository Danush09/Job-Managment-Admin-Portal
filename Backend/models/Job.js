const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    companyName: { type: String, required: true },
    location: { type: String, required: true },
    jobType: { type: String, enum: ['Full-time', 'Part-time', 'Contract', 'Internship'], required: true },
    salaryMin: { type: Number, required: true },
    salaryMax: { type: Number, required: true },
    description: { type: String, required: true },
    applicationDeadline: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
    companyLogo: { type: String },
    minExperience: { type: Number },
    maxExperience: { type: Number },
});

module.exports = mongoose.model('Job', jobSchema); 