import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // or /api/v1
  withCredentials: true, // if using auth cookies
});

export default API;
