import { defineStore } from 'pinia';
import { string } from 'yup';
import type { NotFoundInterface } from '~/interface/not-found/not-found.interface';
import type { NotificationDeleteInterface } from '~/interface/notification/notification-delete.interface';
import type { NotificationInterface } from '~/interface/notification/notification.interface';

import type { uiStoreStateInterface } from '~/interface/store/ui/ui-store-state.interface';

export const useUiStore = defineStore('ui', {
    state: (): uiStoreStateInterface => {
        return {
            isOpenMenu: false,
            isLoading: false,
            popup: {
                isOpenPopup: false,
                component: '',
                props: '',
            },
            notification: {
                status: '',
                message: '',
            },
            notFound: {
                item: '',
                message: '',
            },
            notificationDelete: {
                itemDelete: {
                    name: '',
                    id: 0,
                },
                isDelete: false,
            },
        };
    },

    actions: {
        openMenu() {
            this.isOpenMenu = true;
        },
        closeMenu() {
            this.isOpenMenu = false;
        },
        openPopup(component: any) {
            this.popup.isOpenPopup = true;
            this.popup.component = component;
        },
        openPopupData(component: any, props: any) {
            this.popup.isOpenPopup = true;
            this.popup.component = component;
            this.popup.props = props;
        },
        closePopup() {
            this.popup.isOpenPopup = false;
            this.popup.component = '';
            this.popup.props = '';
        },
        openNotification(notification: NotificationInterface) {
            this.notification.status = notification.status;
            this.notification.message = notification.message;
        },
        clearNotification() {
            this.notification.status = '';
            this.notification.message = '';
        },
        openNotificationDelete(itemDelete: NotificationDeleteInterface) {
            this.notificationDelete.itemDelete = itemDelete;
        },
        deleteItemNotification() {
            this.notificationDelete.isDelete = true;
        },
        clearNotificationDelete() {
            this.notificationDelete.itemDelete = null;
            this.notificationDelete.isDelete = false;
        },
        addNotFoundItem(notFound: NotFoundInterface) {
            this.notFound.item = notFound.item;
            this.notFound.message = notFound.message;
        },

    },
});
