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
            <div>
                <span> Restaurants </span>
            </div>
            <div @click.prevent="goTo('favorite')">
                <span> Favorite </span>
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
import { useUserStore } from '~/store/user';
import { logoutSubmitter } from '~/composables/logout/logout-submitter.composable';
export default defineComponent({
    name: 'MenuMobile',
    components: {},
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
        };
    },
});
</script>

<style scoped></style>
