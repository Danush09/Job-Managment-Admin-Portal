import React, { useEffect, useState, useCallback } from 'react';
import JobList from '../components/JobList';
import FilterBar from '../components/FilterBar';
import API from '../api';

export default function JobListPage({ setRefreshJobsRef }) {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Filter states
    const [role, setRole] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('');
    const [salary, setSalary] = useState([10000, 800000]);

    const refreshJobs = useCallback(() => {
        setLoading(true);
        API.get('/jobs')
            .then(res => setJobs(res.data))
            .catch(() => setJobs([]))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        refreshJobs();
        if (setRefreshJobsRef) setRefreshJobsRef(refreshJobs);
    }, [refreshJobs, setRefreshJobsRef]);

    // Filtering logic
    const filteredJobs = jobs.filter(job => {
        const matchesRole = !role || job.jobTitle.toLowerCase().includes(role.toLowerCase());
        const matchesLocation = !location || job.location.toLowerCase() === location.toLowerCase();
        const matchesType = !jobType || job.jobType === jobType;
        const matchesSalary = job.salaryMin >= salary[0] && job.salaryMax <= salary[1];
        return matchesRole && matchesLocation && matchesType && matchesSalary;
    });

    return (
        <div>
            <FilterBar
                role={role}
                onRoleChange={setRole}
                location={location}
                onLocationChange={setLocation}
                jobType={jobType}
                onJobTypeChange={setJobType}
                salary={salary}
                onSalaryChange={setSalary}
            />
            <JobList jobs={filteredJobs} loading={loading} />
        </div>
    );
} 