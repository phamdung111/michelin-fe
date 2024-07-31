<template>
    <nuxt-layout name="layout-menu">
        <template #title> My restaurant </template>
        <template #content>
            <AccountRestaurant />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
definePageMeta({
    middleware: 'own',
});
import { defineComponent } from 'vue';
import AccountRestaurant from '~/components/own/restaurant/AccountRestaurant.vue';
import AccountMenu from '~/components/account/menu/AccountMenu.vue';
export default defineComponent({
    components: {
        AccountRestaurant,
        AccountMenu,
    },

    setup() {
        return {};
    },
});
</script>

<style scoped></style>
