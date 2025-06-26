import React from 'react';
import styles from './FilterBar.module.css';
import { FiSearch, FiMapPin, FiUser } from 'react-icons/fi';
import Slider from '@mui/material/Slider';

export default function FilterBar({
    role,
    onRoleChange,
    location,
    onLocationChange,
    jobType,
    onJobTypeChange,
    salary,
    onSalaryChange
}) {
    salary = salary || [10000, 800000];
    const handleSlider = (event, newValue) => {
        onSalaryChange(newValue);
    };

    return (
        <div className={styles.filterBar}>
            <div className={styles.iconInput}>
                <FiSearch className={styles.icon} />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Search By Job Title, Role"
                    value={role}
                    onChange={e => onRoleChange(e.target.value)}
                />
            </div>
            <div className={styles.separator} />
            <div className={styles.iconInput}>
                <FiMapPin className={styles.icon} />
                <select
                    className={styles.select}
                    value={location}
                    onChange={e => onLocationChange(e.target.value)}
                >
                    <option value="">Preferred Location</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Remote">Remote</option>
                </select>
            </div>
            <div className={styles.separator} />
            <div className={styles.iconInput}>
                <FiUser className={styles.icon} />
                <select
                    className={styles.select}
                    value={jobType}
                    onChange={e => onJobTypeChange(e.target.value)}
                >
                    <option value="">Job type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                </select>
            </div>
            <div className={styles.separator} />
            <div className={styles.salarySliderBlock}>
                <div className={styles.salarySliderHeader}>
                    <span>Salary Per Month</span>
                    <span className={styles.salaryRange}>
                        ₹{salary[0] / 1000}k - ₹{salary[1] / 1000}k
                    </span>
                </div>
                <Slider
                    value={salary}
                    onChange={handleSlider}
                    min={10000}
                    max={800000}
                    step={10000}
                    valueLabelDisplay="off"
                    sx={{
                        color: '#111',
                        height: 4,
                        '& .MuiSlider-thumb': {
                            width: 28,
                            height: 28,
                            backgroundColor: '#000',
                            border: '4px solid #fff',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        },
                        '& .MuiSlider-rail': {
                            opacity: 1,
                            backgroundColor: '#e0e0e0',
                        },
                        '& .MuiSlider-track': {
                            backgroundColor: '#111',
                        },
                    }}
                />
            </div>
        </div>
    );
} 