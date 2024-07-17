import { updateAccountService } from '~/service/account/update/update-account.service';

export const accountFormAvatarSubmitterComposable = async (formData: FormData) => {
    await updateAccountService.updateAvatar(formData);
};
