import axios from 'axios';

const API = axios.create({
    baseURL: 'https://job-managment-admin-portal.vercel.app/',
});

export default API; 
