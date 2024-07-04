import axios from 'axios';

export const http = () => {
    const config = useRuntimeConfig();

    const api = axios.create({
        baseURL: config.public.apiBase,
        // withCredentials: true,
        // withXSRFToken: true,
    });
    return api;
};
