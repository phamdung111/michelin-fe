import { accountService } from '~/service/account/account.service';

export const accountFormAvatarSubmitterComposable = async (formData: FormData) => {
    await accountService.updateAvatar(formData);
};
