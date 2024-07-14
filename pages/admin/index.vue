<template>
    <nuxt-layout name="admin-layout">
        <template #title> Restaurant </template>
        <template #content>
            <AdminDashboard />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NotificationOverlay from '~/components/notification/NotificationOverlay.vue';
export default defineComponent({
    components: {
        NotificationOverlay,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
