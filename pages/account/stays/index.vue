<template>
    <nuxt-layout name="account-layout">
        <template #title> Stays </template>
        <template #content>
            <StaysAccount></StaysAccount>
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainAccount from '~/components/account/MainAccount.vue';
import NotificationOverlay from '~/components/notification/NotificationOverlay.vue';
import StaysAccount from '~/components/account/StaysAccount.vue';
export default defineComponent({
    components: {
        MainAccount,
        NotificationOverlay,
        StaysAccount,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
