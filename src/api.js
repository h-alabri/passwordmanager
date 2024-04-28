import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:4000'; // Fallback to localhost if env var is not set

const api = axios.create({
  baseURL: baseURL
});

export default api;
