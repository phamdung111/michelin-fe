<template>
    <div class="shadow-md bg-primaryWhite fixed top-0 right-0 w-full z-menu">
        <div :class="ui.isOpenMenu ? 'h-screen lg:h-header transition-height' : 'h-header'" class="mx-[18px] relative">
            <div class="flex justify-between items-center">
                <LogoIcon @click.prevent="navigateTo('/')" class="max-w-[170px] max-h-[24px] w-[170px] h-[24px]" />
                <div class="flex">
                    <div class="hidden lg:block">
                        <div class="flex items-center h-full font-medium text-[15px]">
                            <div class="py-[6px] px-[22px]">
                                <h2>Restaurants</h2>
                            </div>
                            <div class="py-[6px] px-[22px]">
                                <h2>Favorite</h2>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-3 items-center px-4 py-2 lg:border-[1px] border-primaryColor1 rounded-lg h-[58px]">
                        <UserAvatar :size="40" />
                        <Icon
                            @click.prevent="toggleMenu()"
                            class="text-primaryColor"
                            size="22"
                            name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger" />
                    </div>
                </div>
            </div>
            <div v-if="ui.isOpenMenu">
                <div class="lg:hidden">
                    <MenuMobile />
                </div>
                <div class="absolute top-spaceTopNav right-0 hidden lg:block">
                    <MenuDesktop />
                </div>
            </div>
            <AppOverlay></AppOverlay>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogoIcon from '@/assets/icon/michelin-guide-logo-dark.svg';
import AppOverlay from '~/components/overlay/AppOverlay.vue';

import UserAvatar from './UserAvatar.vue';
import MenuMobile from '~/components/menu/MenuMobile.vue';
import MenuDesktop from '~/components/menu/MenuDesktop.vue';
import { useUiStore } from '~/store/ui';
import { useAuthenticationStore } from '~/store/authentication';
import { authenticationComposable } from '~/composables/authentication/authentication-composable';
export default defineComponent({
    name: 'DashBoardHeader',
    components: {
        UserAvatar,
        MenuMobile,
        MenuDesktop,
        AppOverlay,
        LogoIcon,
    },
    setup() {
        const ui = useUiStore();
        const auth = useAuthenticationStore();
        const toggleMenu = () => {
            ui.isOpenMenu = !ui.isOpenMenu;
        };
        onBeforeMount(async () => {
            if (auth.access_token) {
                await authenticationComposable();
            }
        });
        return {
            toggleMenu,
            ui,
        };
    },
});
</script>
<style scoped>
@import '~~/assets/css/style.css';
</style>
