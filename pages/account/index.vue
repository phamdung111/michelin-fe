<template>
    <nuxt-layout name="main-layout">
        <div class="w-full flex justify-center">
            <MainAccount />
        </div>
        <NotificationOverlay />
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainAccount from '~/components/account/MainAccount.vue';
import NotificationOverlay from '~/components/notification/NotificationOverlay.vue';
export default defineComponent({
    components: {
        MainAccount,
        NotificationOverlay,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
