<template>
    <nuxt-layout name="layout-menu">
        <template #title> Order </template>
        <template #menu>
            <OwnOrderMenu />
        </template>
        <template #content>
            <OrderToday />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
definePageMeta({
    middleware: 'own',
});
import { defineComponent } from 'vue';
import OwnOrderMenu from '~/components/own/order/menu/OwnOrderMenu.vue';
import OrderToday from '~/components/order/OrderToday.vue';
export default defineComponent({
    components: {
        OrderToday,
        OwnOrderMenu,
    },

    setup() {
        return {};
    },
});
</script>

<style scoped></style>
