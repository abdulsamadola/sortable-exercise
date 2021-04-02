import axios from 'axios';

export const instance = axios.create({
    baseURL: '/api/',
    timeout: 3000,
});