import type { AccountValidationInterface } from '~/interface/validation/account/account-request-validation.interface';

export const accountFormValidationComposable = reactive<AccountValidationInterface>({
    description: {
        isFailed: false,
        message: '',
    },
    email: {
        isFailed: false,
        message: '',
    },
    name: {
        isFailed: false,
        message: '',
    },
    phone: {
        isFailed: false,
        message: '',
    },
    currentPassword: {
        isFailed: false,
        message: '',
    },
    newPassword: {
        isFailed: false,
        message: '',
    },
    repeatPassword: {
        isFailed: false,
        message: '',
    },
});
