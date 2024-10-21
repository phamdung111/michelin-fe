import { notificationInitialService } from '~/service/notification/notification-initial.service';
import { useNotificationStore } from '~/store/notification';
export const newNotificationInitialComposable = async (offset: number, limit: number) => {
    const response = await notificationInitialService.list(offset, limit);
    const notification = useNotificationStore();
    notification.moreNotifications(response);
};
