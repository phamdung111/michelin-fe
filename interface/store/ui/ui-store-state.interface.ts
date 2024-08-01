import type { NotificationDeleteInterface } from '~/interface/notification/notification-delete.interface';

export interface uiStoreStateInterface {
    isOpenMenu: boolean;
    isLoading: boolean;
    popup: {
        isOpenPopup: boolean;
        component: any;
        props: any;
    };
    notification: {
        status: string;
        message: string;
    };
    notFound: {
        item: string;
        message: string;
    };
    notificationDelete: {
        itemDelete: NotificationDeleteInterface | null;
        isDelete: boolean;
    };
}
