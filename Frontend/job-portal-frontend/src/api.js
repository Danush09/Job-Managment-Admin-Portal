import axios from 'axios';

const API = axios.create({
    baseURL: 'https://job-managment-admin-portal-backend.onrender.com/jobs',
});

export default API; 
