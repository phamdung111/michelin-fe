<template>
    <nuxt-layout name="admin-layout">
        <template #title> Restaurant </template>
        <template #content>
            <AdminDashboard />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
definePageMeta({
    middleware: ['admin'],
});
import { defineComponent } from 'vue';
export default defineComponent({
    components: {},
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
