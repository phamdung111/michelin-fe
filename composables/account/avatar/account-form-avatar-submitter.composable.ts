import { accountService } from '~/service/account/account.service';

export const accountFormAvatarSubmitterComposable = async () => {
    await accountService.updateAvatar();
};
