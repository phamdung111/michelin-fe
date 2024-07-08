import { accountService } from '~/service/account/account.service';
import { accountValidateRequestComposable } from './account-form-validate-request.composable';
import { accountFormData, clearPassword } from './account-form.-data.composable';
import { accountFormValidationComposable } from './account-form-validation.composable';
import type { AccountValidationInterface } from '~/interface/validation/account/account-request-validation.interface';
import { useUiStore } from '~/store/ui';
import { authenticationComposable } from '~/composables/authentication/authentication-composable';

export const accountFormSubmitterComposable = async () => {
    const ui = useUiStore();
    const status = await accountValidateRequestComposable();

    if (status) {
        const response = await accountService.updateInfo(accountFormData);
        if (response.errors) {
            for (let key in response.errors) {
                accountFormValidationComposable[key as keyof AccountValidationInterface].isFailed = true;
                accountFormValidationComposable[key as keyof AccountValidationInterface].message = response.errors[key];
            }
        } else {
            await authenticationComposable();
            clearPassword();
            ui.openNotification({ status: 'success', message: 'Completed' });
        }
    }
};
