<template>
    <nuxt-layout name="layout-menu">
        <template #title> Orders </template>
        <template #menu>
            <AccountMenu />
        </template>
        <template #content>
            <MyOrder />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainAccount from '~/components/account/MainAccount.vue';
import AccountMenu from '~/components/account/menu/AccountMenu.vue';
import NotificationOverlay from '~/components/notification/NotificationOverlay.vue';
import MyOrder from '~/components/account/order/MyOrder.vue';
export default defineComponent({
    components: {
        MainAccount,
        NotificationOverlay,
        MyOrder,
        AccountMenu,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
