import axios from 'axios';
import { useAuthenticationStore } from '~/store/authentication';
export const http = () => {
    const config = useRuntimeConfig();

    const api = axios.create({
        baseURL: config.public.apiBase,
        // withCredentials: true,
        // withXSRFToken: true,
    });
    api.interceptors.request.use(
        function (config) {
            const auth = useAuthenticationStore();
            const token = auth.access_token;
            const isLogin = auth.isLogin;
            if (isLogin) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        function (error) {
            console.log(error);
        }
    );
    // api.interceptors.response.use(
    //     function (response) {},
    //     function (error) {
    //         return Promise.reject(error);
    //     }
    // );
    return api;
};
