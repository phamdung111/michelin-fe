import type { uiStoreStateInterface } from '~/interface/store/ui/ui-store-state.interface';

export const useUiStore = defineStore('ui', {
    state: (): uiStoreStateInterface => {
        return {
            isOpenMenu: false,
        };
    },

    actions: {
        openMenu() {
            this.isOpenMenu = true;
        },
        closeMenu() {
            this.isOpenMenu = false;
        },
    },
});
