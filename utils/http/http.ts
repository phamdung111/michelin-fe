import axios from 'axios';
import { useUiStore } from '~/store/ui';
import { useAuthenticationStore } from '~/store/authentication';
import LoginForm from '~/components/form/login-form/LoginForm.vue';

export const http = () => {
    const config = useRuntimeConfig();
    const auth = useAuthenticationStore();
    const accessToken = auth.access_token;
    const isLogin = auth.isLogin;
    const ui = useUiStore();

    const axiosInstance = axios.create({
        baseURL: config.public.apiBase,
        // withCredentials: true,
        // withXSRFToken: true,
    });

    axiosInstance.interceptors.request.use(
        async function (request) {
            if (isLogin) {
                request.headers['Authorization'] = `Bearer ${accessToken}`;
                request.headers['Login-Source'] = auth.login_source;
            }
            return request;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            console.log(error.response);
            const errorCode = error.response.status;
            const originalRequest = error.config;
            switch (errorCode) {
                case errorCode >= 500 && errorCode < 600:
                    ui.openNotification({ message: 'Something wrong, please try again later.', status: 'errors' });
                case 401:
                    if (!originalRequest._entry) {
                        originalRequest._entry = true;
                        try {
                            const response = await axios.post(
                                `http://localhost:/api/refresh-token`,
                                {},
                                {
                                    headers: {
                                        Authorization: `Bearer ${auth.refresh_token}`,
                                        'Login-Source': auth.login_source,
                                    },
                                }
                            );
                            const newToken = response.data;
                            auth.setAccessToken(newToken);
                            axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
                            originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                            return axios(originalRequest);
                        } catch (refreshError) {
                            auth.removeAuthentication();
                            ui.openPopup(LoginForm);
                            return Promise.reject(refreshError);
                        }
                    }
                    ui.openPopup(LoginForm);
                    break;
                default:
                    ui.openNotification({ message: error.response.data.message, status: 'errors' });
                    break;
            }
            return Promise.reject(error);
        }
    );
    return axiosInstance;
};
