import axios from 'axios';

const AxiosAPI = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    // Remove `withCredentials` as it's more relevant to session-based auth
    // withCredentials: true
});

// Add Authorization header and handle token logic
AxiosAPI.interceptors.request.use((config) => {
    // Attach the token from localStorage to the Authorization header
    const token = localStorage.getItem('YHTOKEN');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

AxiosAPI.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 429) {
            return Promise.reject({
                status: 429,
                message: 'Too many login attempts.'
            });
        } else if (error.response && error.response.status === 401 || error.response.status === 422) {
            localStorage.removeItem('YHTOKEN');
            // window.location.href('/login');
            return Promise.reject({
                status: 401,
                message: 'Invalid email or password.'
            });
        }
        return Promise.reject(error);
    }
);

export default AxiosAPI;
