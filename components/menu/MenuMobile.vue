<template>
    <div class="px-[25px] text-[18px] font-normal text-primaryColor5">
        <div class="py-5">
            <div v-if="!user.id" class="flex">
                <div @click.prevent="openOverlayLogin()" class="pr-4 border-r border-primaryColor">Login</div>
                <div @click.prevent="openOverlayRegister()" class="px-4">Register</div>
            </div>
            <div v-else class="flex">
                <div @click.prevent="goTo('account')" class="pr-4 border-r border-primaryColor">My Account</div>
                <div @click.prevent="openOverlayRegister()" class="px-4">Logout</div>
            </div>
        </div>
        <div class="pt-5 grid gap-2.5 py-5 border-y border-y-primaryColor5">
            <div>
                <span> Restaurants </span>
            </div>
            <div>
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
export default defineComponent({
    name: 'MenuMobile',
    components: {},
    setup() {
        const user = useUserStore();
        const ui = useUiStore();
        const openOverlayLogin = () => {
            ui.openOverlay(LoginForm);
            ui.closeMenu();
        };
        const openOverlayRegister = () => {
            ui.openOverlay(RegisterForm);
            ui.closeMenu();
        };
        const goTo = (route: String) => {
            navigateTo(`/${route}`);
            ui.closeMenu();
        };
        return {
            user,
            openOverlayLogin,
            openOverlayRegister,
            goTo,
        };
    },
});
</script>

<style scoped></style>
