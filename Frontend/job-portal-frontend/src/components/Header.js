import React, { useState } from 'react';
import styles from './Header.module.css';
import JobFormModal from './JobFormModal';
import API from '../api';

export default function Header({ refreshJobs }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = async (data) => {
        try {
            await API.post('/jobs', data);
            if (refreshJobs) refreshJobs();
            handleClose();
        } catch (err) {
            alert('Failed to create job.');
            console.error(err);
        }
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logoBox}>
                    <img src="/pics/logo.png" alt="Logo" className={styles.logo} />            </div>
                <nav className={styles.navLinks}>
                    <a href="#">Home</a>
                    <a href="#">Find Jobs</a>
                    <a href="#">Find Talents</a>
                    <a href="#">About us</a>
                    <a href="#">Testimonials</a>
                </nav>
                <button className={styles.createBtn} onClick={handleOpen}>Create Jobs</button>
            </header>
            <JobFormModal open={open} onClose={handleClose} onSubmit={handleSubmit} />
        </>
    );
} 