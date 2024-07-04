import type { LoginValidateInterface } from '~/interface/validation/login-validate.interface';

export const loginValidateComposable = reactive<LoginValidateInterface>({
    email: {
        isFailed: false,
        message: '',
    },
    password: {
        isFailed: false,
        message: '',
    },
});
