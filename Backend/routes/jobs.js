const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

// GET /jobs (with filters)
router.get('/', async (req, res) => {
    try {
        const { title, location, type, salaryMin, salaryMax } = req.query;
        let filter = {};
        if (title) filter.jobTitle = { $regex: title, $options: 'i' };
        if (location) filter.location = { $regex: location, $options: 'i' };
        if (type) filter.jobType = type;
        if (salaryMin || salaryMax) {
            filter.salaryMin = {};
            if (salaryMin) filter.salaryMin.$gte = Number(salaryMin);
            if (salaryMax) filter.salaryMin.$lte = Number(salaryMax);
        }
        const jobs = await Job.find(filter).sort({ createdAt: -1 });
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /jobs/:id
router.get('/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ error: 'Job not found' });
        res.json(job);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /jobs
router.post('/', async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT /jobs/:id
router.put('/:id', async (req, res) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!job) return res.status(404).json({ error: 'Job not found' });
        res.json(job);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE /jobs/:id
router.delete('/:id', async (req, res) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.id);
        if (!job) return res.status(404).json({ error: 'Job not found' });
        res.json({ message: 'Job deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router; 