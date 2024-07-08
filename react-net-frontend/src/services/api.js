import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:5001/api',
});

export const add = (a, b) => api.get(`/calculator/add?a=${a}&b=${b}`);
export const subtract = (a, b) => api.get(`/calculator/subtract?a=${a}&b=${b}`);
export const multiply = (a, b) => api.get(`/calculator/multiply?a=${a}&b=${b}`);
export const divide = (a, b) => api.get(`/calculator/divide?a=${a}&b=${b}`);

api.interceptors.response.use(
  response => response,
  error => {
    console.error('API call error:', error);
    return Promise.reject(error);
  }
);

export default api;
