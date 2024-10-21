<template>
    <div class="flex flex-col max-w-[550px] max-h-[580px] w-[550px] h-[580px] shadow-xl bg-primaryWhite rounded-lg">
        <div class="flex justify-end items-center mr-4 basis-[58px]">
            <Icon @click.prevent="closePopupRegister" name="mdi:close" size="40" />
        </div>
        <div class="grow">
            <div class="flex justify-center items-center">
                <div class="w-[320px] h-[320px]">
                    <Icon name="icons-michelin-start" />
                    <StarIcon class="w-[44px] mb-[16px]" />
                    <h2 class="text-[16px] font-medium mb-[22px]">Join the MICHELIN Guide Community</h2>
                    <div class="grid gap-2">
                        <label v-if="validate.name.isFailed" class="error-input">{{ validate.name.message }}</label>
                        <input v-model="form.name" class="h-[48px] border rounded-md focus:outline-none pl-3" placeholder="Name" type="text" />
                        <label v-if="validate.email.isFailed" class="error-input">{{ validate.email.message }}</label>
                        <input v-model="form.email" class="h-[48px] border rounded-md focus:outline-none pl-3" placeholder="Email" type="text" />
                        <label v-if="validate.password.isFailed" class="error-input">{{ validate.password.message }}</label>
                        <input v-model="form.password" class="h-[48px] border rounded-md focus:outline-none pl-3" placeholder="Password" type="password" />
                        <label v-if="validate.confirm_password.isFailed" class="error-input">{{ validate.confirm_password.message }}</label>
                        <input v-model="form.confirm_password" class="h-[48px] border rounded-md focus:outline-none pl-3" placeholder="Confirm Password" type="password" />
                    </div>
                    <div class="mt-[40px] mb-[24px]" @click.prevent="submitFormRegister">
                        <BaseButton content="Sign In" bg-color="primaryGreen" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import BaseButton from '~/components/button/BaseButton.vue';
// import StarIcon from '../../assets/icons/michelin-start.svg';
import { registerData as form } from '~/composables/register/register-form-data.composable';
import { registerValidateComposable as validate } from '~/composables/register/register-validate.composable';
import { useUiStore } from '~/store/ui';
import { registerDataSubmitterComposable } from '~/composables/register/register-data-submitter.composable';

export default defineComponent({
    name: 'RegisterForm',
    components: {
        BaseButton,
    },
    setup() {
        const ui = useUiStore();

        const reactiveForm = reactive(form);
        const reactiveValidate = reactive(validate);

        const submitFormRegister = async () => {
            await registerDataSubmitterComposable();
        };

        const closePopupRegister = () => {
            ui.closePopup();
            ui.closeMenu();
        };

        return {
            form: reactiveForm,
            validate: reactiveValidate,
            closePopupRegister,
            submitFormRegister,
        };
    },
});
</script>

<style scoped>
@import '~~/assets/css/style.css';
</style>
