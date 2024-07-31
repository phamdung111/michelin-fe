<template>
    <div class="px-[25px] text-[18px] font-normal text-primaryColor5">
        <div class="py-5">
            <div v-if="!user.id" class="flex">
                <div @click.prevent="openPopupLogin()" class="pr-4 border-r border-primaryColor">Login</div>
                <div @click.prevent="openPopupRegister()" class="px-4">Register</div>
            </div>
            <div v-else class="flex">
                <div @click.prevent="goTo('account')" class="pr-4 border-r border-primaryColor">My Account</div>
                <div @click.prevent="logout()" class="px-4">Logout</div>
            </div>
        </div>
        <div class="pt-5 grid gap-2.5 py-5 border-y border-y-primaryColor5">
            <div @click.prevent="goTo(`${ROUTE.APP.RESTAURANTS}`)">
                <span> {{ MENU.MAIN.RESTAURANT }} </span>
            </div>
            <div @click.prevent="goTo(`${ROUTE.APP.FAVORITE}`)">
                <span> {{ MENU.MAIN.FAVORITE }} </span>
            </div>
            <div v-if="user.isOwn" @click.prevent="goTo(`${ROUTE.OWN_RESTAURANT.MY_RESTAURANT}`)">
                <span> {{ MENU.OWN_RESTAURANT.MY_RESTAURANT }} </span>
            </div>
            <div v-if="user.isOwn" @click.prevent="goTo(`${ROUTE.OWN_RESTAURANT.ORDERS}`)">
                <span> {{ MENU.OWN_RESTAURANT.ORDER }} </span>
            </div>
            <div v-if="user.isManager" @click.prevent="goTo(`${ROUTE.MANAGER_RESTAURANT.ORDERS}`)">
                <span> {{ MENU.MANAGER_RESTAURANT.ORDERS }} </span>
            </div>
            <div>
                <span> Contact us </span>
            </div>
            <div>
                <span> Events </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUiStore } from '~/store/ui';
import LoginForm from '../form/login-form/LoginForm.vue';
import RegisterForm from '../form/register-form/RegisterForm.vue';
import NotificationInformation from '../notification/NotificationInformation.vue';
import { useUserStore } from '~/store/user';
import { logoutSubmitter } from '~/composables/logout/logout-submitter.composable';
import { MENU } from '~/constant/menu/menu.constant';
import { ROUTE } from '~/constant/route.constant';
export default defineComponent({
    name: 'MenuMobile',
    components: {
        NotificationInformation,
    },
    setup() {
        const user = useUserStore();
        const ui = useUiStore();
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

<style scoped></style>
