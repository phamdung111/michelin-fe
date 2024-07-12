<template>
    <nuxt-layout name="main-layout">
        <div class="max-w-[1200px] w-full lg:w-[1200px] text-primaryColor">
            <div class="pt-4 text-[14px] font-medium md:text-[28px] px-6">
                <h1 class="text-[20px]">
                    <slot name="title" />
                </h1>
                <div class="my-5">
                    <AccountMenu />
                </div>
                <div class="w-full flex justify-center">
                    <slot name="content" />
                </div>
            </div>
        </div>
        <NotificationOverlay />
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AccountMenu from '~/components/account/menu/AccountMenu.vue';
import NotificationOverlay from '~/components/notification/NotificationOverlay.vue';
export default defineComponent({
    name: 'AccountLayout',
    components: {
        AccountMenu,
        NotificationOverlay,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
