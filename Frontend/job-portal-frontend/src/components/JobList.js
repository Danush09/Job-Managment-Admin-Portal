import React from 'react';
import JobCard from './JobCard';
import styles from './JobList.module.css';

export default function JobList({ jobs, loading }) {
    if (loading) return <div>Loading jobs...</div>;
    if (!jobs.length) return <div>No jobs found.</div>;

    return (
        <div className={styles.grid}>
            {jobs.map(job => (
                <JobCard key={job._id} job={job} />
            ))}
        </div>
    );
} 