import type { NotificationsResponseInterface } from '~/interface/response/notification/notifications-response.interface';
import { http } from '~/utils/http/http';

export const notificationInitialService = Object.freeze({
    list: async (offset: number, limit: number): Promise<NotificationsResponseInterface> => {
        try {
            const response = await http().post('api/notifications', {
                offset: offset,
                limit: limit,
            });
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
    countNewNotification: async (): Promise<number> => {
        try {
            const response = await http().post('api/count-notifications-unread');
            return response.data;
        } catch (errors: any) {
            return errors.response.data;
        }
    },
});
