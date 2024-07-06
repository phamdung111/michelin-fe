import { accountService } from '~/service/account/account.service';
import { accountValidateComposable } from './account-form-validate.composable';
import { accountFormData } from './account-form.-data.composable';

export const accountFormSubmitterComposable = async () => {
    const status = await accountValidateComposable();

    if (status) {
        accountService.updateInfo(accountFormData);
    }
};
