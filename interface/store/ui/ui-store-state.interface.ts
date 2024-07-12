export interface uiStoreStateInterface {
    isOpenMenu: boolean;
    popup: {
        isOpenPopup: boolean;
        component: any;
        props: any;
    };
    isOpenNotification: {
        status: string;
        message: string;
    };
}
