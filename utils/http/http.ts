import axios, { type AxiosInstance } from 'axios';
import { useUiStore } from '~/store/ui';
import { API_ERROR_CODE } from '~/enum/time-off/api-error-code.enum';
import { useAuthenticationStore } from '~/store/authentication';
import LoginForm from '~/components/form/login-form/LoginForm.vue';
import { authenticationComposable } from '~/composables/authentication/authentication-composable';

const responseInterceptor = (instance: AxiosInstance) => {
    const auth = useAuthenticationStore();
    const ui = useUiStore();
    instance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            console.log(error.response);
            const errorCode = error.response.data.message;
            switch (errorCode) {
                case API_ERROR_CODE.ERROR_SERVER:
                    ui.openNotification({ message: 'Something wrong, please try again later.', status: 'errors' });
                case API_ERROR_CODE.UNAUTHENTICATED:
                    ui.openPopup(LoginForm);
                    break;
                default:
                    ui.openNotification({ message: error.response.data.message, status: 'errors' });
                    break;
            }
            return Promise.reject(error);
        }
    );
};
const requestInterceptor = (instance: AxiosInstance) => {
    const auth = useAuthenticationStore();
    const token = auth.access_token;
    const isLogin = auth.isLogin;

    instance.interceptors.request.use(
        async function (config) {
            if (isLogin) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        function (error) {
            console.log(error);
        }
    );
};
export const http = () => {
    const config = useRuntimeConfig();
    const api = axios.create({
        baseURL: config.public.apiBase,
        // withCredentials: true,
        // withXSRFToken: true,
    });
    requestInterceptor(api);
    responseInterceptor(api);
    return api;
};
