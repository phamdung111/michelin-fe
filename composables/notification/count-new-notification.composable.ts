import { notificationInitialService } from '~/service/notification/notification-initial.service';
import { useNotificationStore } from '~/store/notification';
export const countNewNotificationComposable = async () => {
    const notification = useNotificationStore();
    const response = await notificationInitialService.countNewNotification();
    notification.setNumberNewNotification(response);
};
