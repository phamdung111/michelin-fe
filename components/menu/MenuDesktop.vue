<template>
    <div class="w-[300px] bg-primaryWhite border shadow-xl rounded-md transition-height">
        <div class="py-[21px] pr-[34px] pl-[26px] text-[14px] text-primaryColor">
            <div class="pb-5">
                <div v-if="!user.id">
                    <div @click.prevent="openPopupLogin()" class="pb-[6px] hover:cursor-pointer">Login</div>
                    <div @click.prevent="openPopupRegister" class="pb-[6px] hover:cursor-pointer">Register</div>
                </div>
                <div v-else>
                    <div @click.prevent="goTo('account')" class="pb-[6px] hover:cursor-pointer">My Account</div>
                    <div @click.prevent="logout()" class="pb-[6px] hover:cursor-pointer">Logout</div>
                </div>
            </div>
            <div class="grid gap-2 py-5 border-y border-primaryColor3">
                <div @click.prevent="goTo(`${ROUTE.APP.RESTAURANTS}`)" class="hover:cursor-pointer">Restaurant</div>
                <div @click.prevent="goTo('/favorite')" class="hover:cursor-pointer">Favorite</div>
                <div v-if="user.isOwn" class="relative hover:cursor-pointer">
                    <div class="flex relative">
                        <div>
                            <span>Manager</span>
                            <Icon @click.prevent="isOpenOwnManager = true" v-if="!isOpenOwnManager" name="material-symbols-light:keyboard-arrow-down" />
                            <Icon @click.prevent="isOpenOwnManager = false" v-else name="material-symbols-light:keyboard-arrow-up-rounded" />
                        </div>
                        <NotificationInformation v-if="!isOpenOwnManager" class="absolute right-0" />
                    </div>
                    <div v-if="isOpenOwnManager" class="ml-[30px] mt-[6px] transition-transform duration-100 relative">
                        <div @click.prevent="goTo(`${ROUTE.OWN_RESTAURANT.MY_RESTAURANT}`)" class="pb-[6px]">
                            <span> {{ MENU.OWN_RESTAURANT.MY_RESTAURANT }} </span>
                        </div>
                        <div @click.prevent="goTo(`${ROUTE.OWN_RESTAURANT.ORDERS}`)" class="flex gap-2">
                            <span> {{ MENU.OWN_RESTAURANT.ORDER }} </span>
                            <NotificationInformation class="absolute right-0" />
                        </div>
                    </div>
                </div>
                <div v-if="user.isManager" @click.prevent="goTo(`${ROUTE.MANAGER_RESTAURANT.ORDERS}`)" class="hover:cursor-pointer">
                    <span> {{ MENU.MANAGER_RESTAURANT.ORDERS }} </span>
                </div>
                <div>Contact us</div>
                <div>Events</div>
            </div>
            <div class="flex items-center gap-2 pt-4">
                <Icon class="text-primaryOrange" name="material-symbols-light:location-on-rounded" />
                <span> Vietnam - English - USD </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '../form/login-form/LoginForm.vue';
import RegisterForm from '../form/register-form/RegisterForm.vue';
import { useUiStore } from '~/store/ui';
import { useUserStore } from '~/store/user';
import { logoutSubmitter } from '~/composables/logout/logout-submitter.composable';
import { MENU } from '~/constant/menu/menu.constant';
import { ROUTE } from '~/constant/route/route.constant';
export default defineComponent({
    name: 'MenuDesktop',
    setup() {
        const ui = useUiStore();
        const user = useUserStore();
        const isOpenOwnManager = ref(false);
        const openPopupLogin = () => {
            ui.openPopup(LoginForm);
            ui.closeMenu();
        };
        const openPopupRegister = () => {
            ui.openPopup(RegisterForm);
            ui.closeMenu();
        };
        const goTo = (route: String) => {
            navigateTo(`/${route}`);
            ui.closeMenu();
        };
        const logout = async () => {
            await logoutSubmitter();
        };
        return {
            user,
            isOpenOwnManager,
            openPopupLogin,
            openPopupRegister,
            goTo,
            logout,
            MENU,
            ROUTE,
        };
    },
});
</script>

<style scoped>
@import '~~/assets/css/style.css';
</style>
