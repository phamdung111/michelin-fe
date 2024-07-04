import type { registerRequestInterface } from '~/interface/request/register/register-request.interface';

export const registerData = reactive<registerRequestInterface>({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
});
