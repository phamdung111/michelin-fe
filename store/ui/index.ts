import { defineStore } from 'pinia';
import type { NotificationInterface } from '~/interface/notification/notification.interface';

import type { uiStoreStateInterface } from '~/interface/store/ui/ui-store-state.interface';

export const useUiStore = defineStore('ui', {
    state: (): uiStoreStateInterface => {
        return {
            isOpenMenu: false,
            popup: {
                isOpenPopup: false,
                component: '',
                props: '',
            },
            isOpenNotification: {
                status: '',
                message: '',
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
            this.isOpenNotification.status = notification.status;
            this.isOpenNotification.message = notification.message;
        },
        clearNotification() {
            this.isOpenNotification.status = '';
            this.isOpenNotification.message = '';
        },
    },
});
