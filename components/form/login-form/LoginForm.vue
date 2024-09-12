<template>
    <div class="flex flex-col max-w-[550px] max-h-[580px] w-[550px] h-[580px] shadow-xl bg-primaryWhite rounded-lg">
        <div class="flex justify-end items-center mr-4 basis-[58px]">
            <Icon @click.prevent="closePopupLogin()" name="mdi:close" size="40" />
        </div>
        <div class="grow">
            <div class="flex justify-center items-center h-full">
                <div class="w-[320px] h-[320px]">
                    <h2 class="text-[22px] font-medium mb-[22px]">Welcome back.</h2>
                    <span v-if="validate.loginError.isFailed" class="error-input">{{ validate.loginError.message }}</span>
                    <span v-if="validate.email.isFailed" class="error-input">{{ validate.email.message }}</span>
                    <input v-model="form.email" class="h-[48px] w-full mb-6 border rounded-md focus:outline-none pl-3" placeholder="Email" type="text" />
                    <span v-if="validate.password.isFailed" class="error-input">{{ validate.password.message }}</span>
                    <input v-model="form.password" class="h-[48px] w-full border rounded-md focus:outline-none pl-3" placeholder="Password" type="password" />
                    <div class="mt-[40px] mb-[24px]" @click="login()">
                        <BaseButton content="Sign In" bg-color="primaryGreen" />
                    </div>
                    <div>
                        <p class="text-center">Login with</p>
                        <div class="flex gap-[20px] mt-[10px] justify-center">
                            <button @click.prevent="loginWithSocial('github')">
                                <Icon name="mdi:github" size="35" />
                            </button>
                            <button @click.prevent="loginWithSocial('google')">
                                <Icon name="logos:google-icon" size="30" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <LoginWithGithub v-if="loginWith === 'github'" :login-with="loginWith" />
    <LoginWithGoogle v-if="loginWith === 'google'" :login-with="loginWith" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUiStore } from '~/store/ui';
import BaseButton from '~/components/button/BaseButton.vue';
import { loginFormData as form } from '~/composables/login/login-form-data.composable';
import { loginDataSubmitterComposable } from '~/composables/login/login-data-submitter.composable';
import { loginValidateComposable as validate } from '~/composables/login/login-validate.composable';
import LoginWithGithub from './login-oauth/LoginWithGithub.vue';
import LoginWithGoogle from './login-oauth/LoginWithGoogle.vue';
export default defineComponent({
    name: 'LoginForm',
    components: {
        BaseButton,
        LoginWithGithub,
        LoginWithGoogle,
    },
    setup() {
        const ui = useUiStore();
        const loginWith = ref('');
        const loginWithSocial = (social: string) => {
            if (loginWith.value !== '') {
                loginWith.value = '';
            }
            setTimeout(() => {
                loginWith.value = social;
            }, 500);
        };

        const closePopupLogin = () => {
            ui.closePopup();
        };
        const login = async () => {
            const response = await loginDataSubmitterComposable();
        };
        return {
            form,
            validate,
            loginWith,
            closePopupLogin,
            login,
            loginWithSocial,
        };
    },
});
</script>

<style scoped>
@import '~~/assets/css/style.css';
</style>
