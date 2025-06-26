import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import styles from './JobFormModal.module.css';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const ModalBox = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.13);
  padding: 32px 32px 24px 32px;
  min-width: 480px;
  max-width: 540px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`;

export default function JobFormModal({ open, onClose, onSubmit }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    if (!open) return null;

    const handleFormSubmit = (data) => {
        // Convert experience fields to numbers
        data.minExperience = data.minExperience ? Number(data.minExperience) : undefined;
        data.maxExperience = data.maxExperience ? Number(data.maxExperience) : undefined;
        onSubmit(data);
        reset();
        onClose();
    };

    return (
        <Overlay onClick={onClose}>
            <ModalBox onClick={e => e.stopPropagation()}>
                <h2 className={styles.title}>Create Job Opening</h2>
                <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className={styles.row}>
                        <div className={styles.fieldCol}>
                            <label>Job Title</label>
                            <input {...register('jobTitle', { required: true })} />
                            {errors.jobTitle && <span className={styles.error}>Required</span>}
                        </div>
                        <div className={styles.fieldCol}>
                            <label>Company Name</label>
                            <input {...register('companyName', { required: true })} />
                            {errors.companyName && <span className={styles.error}>Required</span>}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.fieldCol}>
                            <label>Salary Min</label>
                            <input type="number" {...register('salaryMin', { required: true })} />
                            {errors.salaryMin && <span className={styles.error}>Required</span>}
                        </div>
                        <div className={styles.fieldCol}>
                            <label>Salary Max</label>
                            <input type="number" {...register('salaryMax', { required: true })} />
                            {errors.salaryMax && <span className={styles.error}>Required</span>}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.fieldCol} style={{ minWidth: 120 }}>
                            <label>Experience (years)</label>
                            <div style={{ display: 'flex', gap: 6 }}>
                                <input type="number" min={0} max={50} placeholder="Min" style={{ width: 50 }} {...register('minExperience', { required: true })} />
                                <span style={{ alignSelf: 'center' }}>-</span>
                                <input type="number" min={0} max={50} placeholder="Max" style={{ width: 50 }} {...register('maxExperience', { required: true })} />
                            </div>
                            {(errors.minExperience || errors.maxExperience) && <span className={styles.error}>Required</span>}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.fieldCol}>
                            <label>Company Logo URL</label>
                            <input {...register('companyLogo')} placeholder="https://example.com/logo.png" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.fieldCol}>
                            <label>Location</label>
                            <input {...register('location', { required: true })} />
                            {errors.location && <span className={styles.error}>Required</span>}
                        </div>
                        <div className={styles.fieldCol}>
                            <label>Job Type</label>
                            <select {...register('jobType', { required: true })}>
                                <option value="">Select</option>
                                <option value="Full-time">Full Time</option>
                                <option value="Part-time">Part Time</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                            </select>
                            {errors.jobType && <span className={styles.error}>Required</span>}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.fieldColFull}>
                            <label>Job Description</label>
                            <textarea {...register('description', { required: true })} rows={4} />
                            {errors.description && <span className={styles.error}>Required</span>}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.fieldColFull}>
                            <label>Application Deadline</label>
                            <input type="date" {...register('applicationDeadline', { required: true })} />
                            {errors.applicationDeadline && <span className={styles.error}>Required</span>}
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <button type="button" className={styles.draftBtn} onClick={onClose}>Save Draft</button>
                        <button type="submit" className={styles.publishBtn}>Publish &raquo;</button>
                    </div>
                </form>
            </ModalBox>
        </Overlay>
    );
} 