<template>
    <nuxt-layout name="main-layout">
        <template #default>
            <MainDashBoard />
            <NotificationOverlay />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainDashBoard from '~/components/dashboard/main/MainDashBoard.vue';
import NotificationOverlay from '~/components/notification/NotificationOverlay.vue';
export default defineComponent({
    components: {
        MainDashBoard,
        NotificationOverlay,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
