<template>
    <nuxt-layout name="account-layout">
        <template #title> Stays </template>
        <template #content>
            <MyOrder />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainAccount from '~/components/account/MainAccount.vue';
import NotificationOverlay from '~/components/notification/NotificationOverlay.vue';
import MyOrder from '~/components/account/order/MyOrder.vue';
export default defineComponent({
    components: {
        MainAccount,
        NotificationOverlay,
        MyOrder,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
