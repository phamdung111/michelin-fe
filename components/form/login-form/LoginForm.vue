<template>
    <div class="flex flex-col max-w-[550px] max-h-[580px] w-[550px] h-[580px] shadow-xl bg-primaryWhite rounded-lg">
        <div class="flex justify-end items-center mr-4 basis-[58px]">
            <Icon @click.prevent="closeOverlayLogin()" name="mdi:close" size="40" />
        </div>
        <div class="grow">
            <div class="flex justify-center items-center h-full">
                <div class="w-[320px] h-[320px]">
                    <h2 class="text-[22px] font-medium mb-[22px]">Welcome back.</h2>
                    <span v-if="validate.email.isFailed" class="error-input">{{ validate.email.message }}</span>
                    <input v-model="form.email" class="h-[48px] w-full mb-6 border rounded-md focus:outline-none pl-3" placeholder="Email" type="text" />
                    <span v-if="validate.password.isFailed" class="error-input">{{ validate.password.message }}</span>
                    <input v-model="form.password" class="h-[48px] w-full border rounded-md focus:outline-none pl-3" placeholder="Password" type="password" />
                    <div class="mt-[40px] mb-[24px]" @click="login()">
                        <BaseButton content="Sign In" bg-color="primaryGreen" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUiStore } from '~/store/ui';
import BaseButton from '~/components/button/BaseButton.vue';
import { loginFormData as form } from '~/composables/login/login-form-data.composable';
import { loginDataSubmitterComposable } from '~/composables/login/login-data-submitter.composable';
import { loginValidateComposable as validate } from '~/composables/login/login-validate.composable';
export default defineComponent({
    name: 'LoginForm',
    components: {
        BaseButton,
    },
    setup() {
        const ui = useUiStore();
        const closeOverlayLogin = () => {
            ui.closeOverlay();
        };
        const login = async () => {
            await loginDataSubmitterComposable();
        };
        return {
            form,
            validate,
            closeOverlayLogin,
            login,
        };
    },
});
</script>

<style scoped>
@import '~~/assets/css/style.css';
</style>
