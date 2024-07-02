<template>
    <div class="flex flex-col max-w-[550px] max-h-[580px] w-[550px] h-[580px] shadow-xl bg-primaryWhite rounded-lg">
        <div class="flex justify-end items-center mr-4 basis-[58px]">
            <Icon @click.prevent="closeOverlayRegister()" name="mdi:close" size="40" />
        </div>
        <div class="grow">
            <div class="flex justify-center items-center">
                <div class="w-[320px] h-[320px]">
                    <StarIcon class="w-[44px] mb-[16px]" />
                    <h2 class="text-[16px] font-medium mb-[22px]">Join the MICHELIN Guide Community</h2>
                    <div class="grid gap-2">
                        <input v-model="form.name" class="h-[48px] border rounded-md focus:outline-none pl-3" placeholder="Name" type="text" />
                        <input v-model="form.email" class="h-[48px] border rounded-md focus:outline-none pl-3" placeholder="Email" type="text" />
                        <input v-model="form.password" class="h-[48px] border rounded-md focus:outline-none pl-3" placeholder="Password" type="password" />
                        <input v-model="form.password_confirm" class="h-[48px] border rounded-md focus:outline-none pl-3" placeholder="Confirm Password" type="password" />
                    </div>
                    <div class="mt-[40px] mb-[24px]" @click.prevent="submitFormRegister()">
                        <BaseButton content="Sign In" bg-color="primaryGreen"></BaseButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StarIcon from '@/assets/icon/michelin-star.svg';
import BaseButton from '~/components/button/BaseButton.vue';
import { registerData as form } from '~/composables/register/register-data.composable';
import { useUiStore } from '~/store/ui';

export default defineComponent({
    name: 'RegisterForm',
    components: {
        BaseButton,
        StarIcon,
    },
    setup() {
        const ui = useUiStore();
        const submitFormRegister = async () => {};
        const closeOverlayRegister = () => {
            ui.closeOverlay();
            ui.closeMenu();
        };
        return {
            form,
            closeOverlayRegister,
            submitFormRegister,
        };
    },
});
</script>

<style scoped></style>
