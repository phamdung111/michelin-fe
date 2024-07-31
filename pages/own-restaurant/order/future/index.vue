<template>
    <nuxt-layout name="layout-menu">
        <template #title> Order </template>
        <template #menu>
            <OwnOrderMenu />
        </template>
        <template #content>
            <OrderFuture />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
definePageMeta({
    middleware: 'own',
});
import { defineComponent } from 'vue';
import OwnOrderMenu from '~/components/own/order/menu/OwnOrderMenu.vue';
import OrderFuture from '~/components/order/OrderFuture.vue';
export default defineComponent({
    components: {
        OwnOrderMenu,
        OrderFuture,
    },

    setup() {
        return {};
    },
});
</script>

<style scoped></style>
