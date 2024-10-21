import type { NotificationResponseInterface } from '~/interface/response/notification/notification-response.interface';
import type { NotificationsResponseInterface } from '~/interface/response/notification/notifications-response.interface';
import type { NotificationStoreStateInterface } from '~/interface/store/notification/notification-store-state.interface';

export const useNotificationStore = defineStore('notification', {
    state: (): NotificationStoreStateInterface => {
        return {
            numberNewNotification: 0,
            newNotifications: [],
            list: [],
            total: 0,
        };
    },
    actions: {
        moreNewNotification(notification: NotificationResponseInterface) {
            this.numberNewNotification += 1;
            this.newNotifications.unshift(notification);
            this.list.push(notification);
            setTimeout(() => {
                this.newNotifications.pop();
            }, 3000);
        },
        setNumberNewNotification(total: number) {
            this.numberNewNotification = total;
        },
        clearNewNotification() {
            this.newNotifications.unshift();
        },
        isReadNotification() {
            this.numberNewNotification = 0;
        },
        moreNotifications(notifications: NotificationsResponseInterface) {
            this.list.push(...notifications.notifications);
            this.total = notifications.total;
        },
    },
});
