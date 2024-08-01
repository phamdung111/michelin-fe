<template>
    <div class="shadow-md bg-primaryWhite fixed top-0 right-0 w-full z-menu">
        <div :class="ui.isOpenMenu ? 'h-screen lg:h-header transition-height' : 'h-header'" class="mx-[18px] relative">
            <div class="flex justify-between items-center">
                <LogoIcon @click.prevent="navigateTo('/')" class="max-w-[170px] max-h-[24px] w-[170px] h-[24px]" />
                <div class="flex">
                    <div class="hidden lg:block">
                        <div class="flex items-center h-full font-medium text-[15px]">
                            <div @click.prevent="goTo('restaurants')" class="py-[6px] px-[22px] hover:cursor-pointer">
                                <h2>Restaurants</h2>
                            </div>
                            <div @click.prevent="goTo('favorite')" class="py-[6px] px-[22px] hover:cursor-pointer">
                                <h2>Favorite</h2>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-3 items-center px-4 py-2 lg:border-[1px] border-primaryColor1 rounded-lg h-[58px]">
                        <div class="flex gap-1 relative">
                            <div @click.prevent="toggleMenu()" class="absolute -bottom-2.5 -right-2.5">
                                <NotificationInformation :size="30" />
                            </div>
                            <UserAvatar @click="navigateTo('/account')" :size="40" />
                        </div>
                        <Icon
                            @click.prevent="toggleMenu()"
                            class="text-primaryColor"
                            size="22"
                            name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger" />
                    </div>
                </div>
            </div>
            <slot name="menu" />
            <AppOverlay></AppOverlay>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogoIcon from '~/assets/icon/michelin-guide-logo-dark.svg';
import AppOverlay from '~/components/overlay/AppOverlay.vue';
import NotificationInformation from '~/components/notification/NotificationInformation.vue';

import UserAvatar from './UserAvatar.vue';
import { useUiStore } from '~/store/ui';
import { useAuthenticationStore } from '~/store/authentication';

export default defineComponent({
    name: 'DashBoardHeader',
    components: {
        UserAvatar,
        AppOverlay,
        LogoIcon,
        NotificationInformation,
    },
    setup() {
        const ui = useUiStore();
        const auth = useAuthenticationStore();
        const toggleMenu = () => {
            ui.isOpenMenu = !ui.isOpenMenu;
        };
        const goTo = (route: string) => {
            navigateTo(`/${route}`);
        };

        return {
            ui,
            toggleMenu,
            goTo,
        };
    },
});
</script>
<style scoped>
@import '~~/assets/css/style.css';
</style>
