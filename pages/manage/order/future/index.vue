<template>
    <nuxt-layout name="layout-menu">
        <template #title> Order </template>
        <template #menu>
            <ManagerMenuOrder />
        </template>
        <template #content>
            <OrderFuture :api="managerRestaurantOrdersFutureInitialDataComposable" />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
definePageMeta({
    middleware: 'manager',
});
import { defineComponent } from 'vue';
import ManagerMenuOrder from '~/components/manager/menu/ManagerMenuOrder.vue';
import OrderFuture from '~/components/order/OrderFuture.vue';
import { managerRestaurantOrdersFutureInitialDataComposable } from '~/composables/manager/order/time-order/future/manager-restaurant-orders-today-initial-data.composable';
export default defineComponent({
    components: {
        OrderFuture,
        ManagerMenuOrder,
    },
    setup() {
        return {
            managerRestaurantOrdersFutureInitialDataComposable,
        };
    },
});
</script>

<style scoped></style>
