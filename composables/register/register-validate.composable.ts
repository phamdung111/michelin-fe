import type { RegisterValidateInterFace } from '~/interface/validation/register-validate.interface';

export const registerValidateComposable = reactive<RegisterValidateInterFace>({
    name: {
        isFailed: false,
        message: '',
    },
    email: {
        isFailed: false,
        message: '',
    },
    password: {
        isFailed: false,
        message: '',
    },
    confirm_password: {
        isFailed: false,
        message: '',
    },
});
