<template>
    <nuxt-layout name="layout-menu">
        <template #title> Order </template>
        <template #menu>
            <OwnOrderMenu />
        </template>
        <template #content>
            <OrderFuture :api="ownRestaurantOrdersFutureInitialDataComposable" />
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
import { ownRestaurantOrdersFutureInitialDataComposable } from '~/composables/own-restaurant/order/initial/time-order/future/own-restaurant-orders-future-initial-data.composable';
export default defineComponent({
    components: {
        OwnOrderMenu,
        OrderFuture,
    },

    setup() {
        return {
            ownRestaurantOrdersFutureInitialDataComposable,
        };
    },
});
</script>

<style scoped></style>
