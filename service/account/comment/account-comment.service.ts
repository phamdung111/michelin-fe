import type { AccountCommentRequestInterface } from '~/interface/request/account/comment/account-comment-request.interface';
import { http } from '~/utils/http/http';

export const accountCommentService = Object.freeze({
    comment: async (payload: AccountCommentRequestInterface): Promise<number> => {
        try {
            const response = await http().post('api/auth/comment', payload);
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    },
});
