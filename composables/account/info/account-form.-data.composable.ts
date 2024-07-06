import type { AccountRequestInterface } from '~/interface/request/account/account-request.interface';

export const accountFormData = reactive<AccountRequestInterface>({
    description: '',
    email: '',
    name: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
});
