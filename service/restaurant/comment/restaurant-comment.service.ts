import type { AccountGetterCommentsRequestInterface } from '~/interface/request/account/comment/account-getter-comments-request.interface';
import type { CommentRestaurantResponseInterface } from '~/interface/response/restaurant/comment/comment-restaurant-response.interface';
import { http } from '~/utils/http/http';

export const restaurantCommentService = Object.freeze({
    listComment: async (headers: AccountGetterCommentsRequestInterface): Promise<CommentRestaurantResponseInterface> => {
        try {
            const response = await http().get(`api/comments`, {
                params: {
                    restaurantId: headers.restaurantId,
                    limit: headers.limit,
                    offset: headers.offset,
                },
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
    delete: async (id: number): Promise<Boolean> => {
        try {
            const response = await http().post('api/auth/delete-comment', { id });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
    edit: async (id: number, content: string): Promise<Boolean> => {
        try {
            const response = await http().post('api/auth/edit-comment', { id, content });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
