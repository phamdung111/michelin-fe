<template>
    <div class="shadow-md bg-primaryWhite fixed top-0 right-0 w-full z-menu">
        <div :class="ui.menuOpen === 'main-menu' ? 'h-screen lg:h-header transition-height' : 'h-header'" class="mx-[18px] relative">
            <div class="flex justify-between items-center">
                <div @click.prevent="navigateTo('/')">
                    <Icon name="icons:michelin-guide-logo-dark" />
                    <!-- <LogoIcon @click.prevent="navigateTo('/')" class="max-w-[170px] max-h-[24px] w-[170px] h-[24px]" /> -->
                </div>
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
                        <div v-if="auth.isLogin" class="flex gap-2 relative items-center">
                            <div @click="toggleNotification()" class="relative w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-primaryColor6 border">
                                <Icon name="material-symbols:notifications-outline" size="30" class="text-primaryColor3 opacity-50"></Icon>
                                <div class="absolute -bottom-5 -right-3">
                                    <NotificationCount :size="30" />
                                </div>
                            </div>
                            <UserAvatar v-if="user" @click.prevent="toggleMenu()" :size="40" />
                            <div class="absolute top-12 -right-4" v-if="ui.menuOpen === 'notification'">
                                <NotificationInformation />
                            </div>
                            <div v-if="notification.newNotifications.length && ui.menuOpen !== 'notification'" class="absolute top-[60px] -right-3">
                                <div>
                                    <div class="w-[400px] border p-2 bg-white rounded-xl">
                                        <div v-for="item in notification.newNotifications" :key="item.actorID" class="new-notification-display">
                                            <NewNotification :notification="item" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="!user.id">
                            <Icon @click.prevent="toggleMenu()" class="text-primaryColor" size="30" name="octicon:three-bars-24" />
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
import AppOverlay from '~/components/overlay/AppOverlay.vue';
import NotificationCount from '~/components/dashboard/header/notification/NotificationCount.vue';
import NotificationInformation from './notification/NotificationInformation.vue';
import NewNotification from './notification/NewNotification.vue';
import UserAvatar from './UserAvatar.vue';
import { useUiStore } from '~/store/ui';
import { useAuthenticationStore } from '~/store/authentication';
import { useUserStore } from '~/store/user';
import { useNotificationStore } from '~/store/notification';
import { authenticationComposable } from '~/composables/authentication/authentication-composable';
import { newNotificationInitialComposable } from '~/composables/notification/new-notification-initial.composable';
import { COUNT_NOTIFICATION_TAB } from '~/enum/count-notification-tab';
export default defineComponent({
    name: 'DashBoardHeader',
    props: {},
    components: {
        UserAvatar,
        AppOverlay,
        NotificationCount,
        NotificationInformation,
        NewNotification,
    },
    setup() {
        const ui = useUiStore();
        const user = useUserStore();
        const auth = useAuthenticationStore();
        const notification = useNotificationStore();
        const toggleMenu = () => {
            if (ui.menuOpen !== 'main-menu') {
                ui.openMenu('main-menu');
            } else {
                ui.closeMenu();
            }
        };
        const goTo = (route: string) => {
            navigateTo(`/${route}`);
        };
        const toggleNotification = async () => {
            if (ui.menuOpen !== 'notification') {
                ui.openMenu('notification');
                if (notification.list.length < COUNT_NOTIFICATION_TAB.COUNT) {
                    await newNotificationInitialComposable(0, COUNT_NOTIFICATION_TAB.COUNT);
                    notification.isReadNotification();
                }
            } else {
                ui.closeMenu();
            }
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
            notification,
            auth,
            toggleMenu,
            goTo,
            toggleNotification,
        };
    },
});
</script>
<style scoped>
@import '~~/assets/css/style.css';

.new-notification-display {
    animation: animationMove 6s forwards;
}

@keyframes animationMove {
    0% {
        top: 20px;
        opacity: 1;
    }
    70% {
        top: 70px;
        opacity: 1;
    }
    100% {
        top: 100px;
        opacity: 0;
    }
}
</style>
