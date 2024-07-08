export interface uiStoreStateInterface {
    isOpenMenu: boolean;
    overlay: {
        isOpenOverlay: boolean;
        component: any;
    };
    isOpenNotification: {
        status: string;
        message: string;
    };
}
