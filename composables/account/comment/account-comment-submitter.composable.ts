import type { AccountCommentRequestInterface } from '~/interface/request/account/comment/account-comment-request.interface';
import { accountCommentService } from '~/service/account/comment/account-comment.service';

export const accountCommentSubmitterComposable = async (payload: AccountCommentRequestInterface) => {
    const response = await accountCommentService.comment(payload);
    return response;
};
