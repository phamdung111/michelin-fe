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

                    <div class="flex gap-3 items-center justify-center px-4 py-2 border-[1px] border-primaryColor1 rounded-lg h-[58px]">
                        <div v-if="user.id" class="flex gap-2 relative items-center">
                            <div class="relative w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-primaryColor6 border">
                                <Icon name="material-symbols:notifications-outline" size="30" class="text-primaryColor3 opacity-50"></Icon>
                                <div class="absolute -bottom-5 -right-3">
                                    <NotificationCount :size="30" />
                                </div>
                                <div class="absolute top-10 right-0">
                                    <NotificationInformation />
                                </div>
                            </div>
                            <UserAvatar v-if="user" @click.prevent="toggleMenu()" :size="40" />
                        </div>
                        <div class="hidden lg:block">
                            <Icon
                                @click.prevent="toggleMenu()"
                                class="text-primaryColor hidden"
                                size="22"
                                name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger" />
                        </div>
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
import NotificationCount from '~/components/notification/NotificationCount.vue';
import NotificationInformation from './notification/NotificationInformation.vue';

import UserAvatar from './UserAvatar.vue';
import { useUiStore } from '~/store/ui';
import { useAuthenticationStore } from '~/store/authentication';
import { useUserStore } from '~/store/user';
import { authenticationComposable } from '~/composables/authentication/authentication-composable';
export default defineComponent({
    name: 'DashBoardHeader',
    components: {
        UserAvatar,
        AppOverlay,
        LogoIcon,
        NotificationCount,
        NotificationInformation,
    },
    setup() {
        const ui = useUiStore();
        const user = useUserStore();
        const auth = useAuthenticationStore();

        const toggleMenu = () => {
            ui.isOpenMenu = !ui.isOpenMenu;
        };
        const goTo = (route: string) => {
            navigateTo(`/${route}`);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('storage', async (event) => {
                if (event.key === 'auth') {
                    const authentication = JSON.parse(event.newValue!);
                    auth.setAuthentication(authentication);
                    await authenticationComposable();
                    if (user.id) {
                        ui.closePopup();
                    }
                }
            });
        }
        return {
            ui,
            user,
            toggleMenu,
            goTo,
        };
    },
});
</script>
<style scoped>
@import '~~/assets/css/style.css';
</style>
