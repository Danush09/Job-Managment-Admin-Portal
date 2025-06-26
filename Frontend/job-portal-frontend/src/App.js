import React, { useRef } from 'react';
import JobListPage from './pages/JobListPage';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import styles from './App.module.css';

function App() {
  // We'll use a ref to access refreshJobs from JobListPage
  const refreshJobsRef = useRef();

  return (
    <div className={styles.appBg}>
      <Header refreshJobs={() => refreshJobsRef.current && refreshJobsRef.current()} />

      <JobListPage setRefreshJobsRef={fn => (refreshJobsRef.current = fn)} />
    </div>
  );
}

export default App;
