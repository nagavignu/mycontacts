import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from '../config/env';

const headers = {};

const axiosInstance = axios.create({
    baseURL: envs.BACKEND_URL,
    headers
});

axiosInstance.interceptors.request.use(
    async (config) => {
        console.log(config);
        const token = AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;