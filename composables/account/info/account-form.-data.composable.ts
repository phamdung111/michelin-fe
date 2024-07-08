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
export const clearPassword = () => {
    accountFormData.currentPassword = '';
    accountFormData.newPassword = '';
    accountFormData.repeatPassword = '';
};
