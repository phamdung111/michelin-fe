import type { NotificationResponseInterface } from '~/interface/response/notification/notification-response.interface';

export interface NotificationStoreStateInterface {
    numberNewNotification: number;
    newNotifications: NotificationResponseInterface[];
    list: NotificationResponseInterface[];
    total: number;
}
