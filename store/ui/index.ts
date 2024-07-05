import { defineStore } from 'pinia';

import type { uiStoreStateInterface } from '~/interface/store/ui/ui-store-state.interface';

export const useUiStore = defineStore('ui', {
    state: (): uiStoreStateInterface => {
        return {
            isOpenMenu: false,
            overlay: {
                isOpenOverlay: false,
                component: '',
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
        openOverlay(component: any) {
            this.overlay.isOpenOverlay = true;
            this.overlay.component = component;
        },
        closeOverlay() {
            this.overlay.isOpenOverlay = false;
            this.overlay.component = '';
        },
    },
});
