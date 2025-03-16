import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to include the token in protected requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject({
        message: 'Cannot connect to server. Please check if backend is running.'
      });
    }

    switch (error.response.status) {
      case 401:
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/admin/login';
        return Promise.reject({
          message: 'Session expired. Please login again.'
        });
      case 403:
        return Promise.reject({
          message: 'You do not have permission to perform this action.'
        });
      case 404:
        return Promise.reject({
          message: 'Resource not found.'
        });
      case 500:
        return Promise.reject({
          message: 'Server error. Please try again later.'
        });
      default:
        return Promise.reject(error.response.data || {
          message: 'An unexpected error occurred.'
        });
    }
  }
);

// Test the backend connection
api.get('/test')
  .then(() => console.log('Backend connection successful'))
  .catch(error => console.error('Backend connection failed:', error));

export default api; 