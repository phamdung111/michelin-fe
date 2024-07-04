import type { LoginRequestInterface } from '~/interface/request/login/login-request.interface';

export const loginFormData = reactive<LoginRequestInterface>({
    email: '',
    password: '',
});
