import type { NotificationResponseInterface } from './notification-response.interface';

export interface NotificationsResponseInterface {
    notifications: NotificationResponseInterface[];
    total: number;
}
