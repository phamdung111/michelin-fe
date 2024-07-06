import type { AccountAvatarRequestInterface } from '~/interface/request/account/account-avatar-request.interface';

export const accountFormAvatarData = reactive<AccountAvatarRequestInterface>({
    image: new FormData(),
});
