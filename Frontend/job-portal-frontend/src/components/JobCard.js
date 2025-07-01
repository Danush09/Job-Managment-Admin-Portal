import React from 'react';
import styles from './JobCard.module.css';
import styled from 'styled-components';
import { FiUser, FiMapPin, FiLayers } from 'react-icons/fi';

const ApplyButton = styled.button`
  background: #0096ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 0;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 16px;
`;

function getTimeAgo(createdAt) {
    if (!createdAt) return '';
    const now = new Date();
    const created = new Date(createdAt);
    const diffMs = now - created;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffMins < 60) return `${diffMins}m Ago`;
    if (diffHrs < 24) return `${diffHrs}h Ago`;
    if (diffDays < 7) return `${diffDays}d Ago`;
    return created.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function formatSalaryRange(min, max) {
    if (min >= 100000 && max >= 100000) {
        return `${min / 100000} - ${max / 100000} LPA`;
    }
    return `${Math.round(min / 1000)}k - ${Math.round(max / 1000)}k`;
}

export default function JobCard({ job }) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.logoWrapper}>
                    <div className={styles.logoCircle}>
                        <img src={job.companyLogo} alt={job.companyName} className={styles.logoImg} />
                    </div>
                </div>
                <span className={styles.timeAgo}>{getTimeAgo(job.createdAt)}</span>
            </div>
            <h3 className={styles.title}>{job.jobTitle}</h3>
            <div className={styles.meta}>
                <span><FiUser className={styles.metaIcon} />{(job.minExperience != null && job.maxExperience != null)
                    ? `${job.minExperience}-${job.maxExperience} yr Exp`
                    : 'Exp. N/A'}</span>
                <span><FiMapPin className={styles.metaIcon} />{job.location}</span>
                <span><FiLayers className={styles.metaIcon} />{formatSalaryRange(job.salaryMin, job.salaryMax)}</span>
            </div>
            <ul className={styles.descList}>
                {job.description.split('\n').slice(0, 2).map((line, idx) => (
                    <li key={idx}>{line}</li>
                ))}
            </ul>
            <ApplyButton>Apply Now</ApplyButton>
        </div>
    );
} 