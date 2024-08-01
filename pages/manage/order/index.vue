<template>
    <nuxt-layout name="layout-menu">
        <template #title> Order </template>
        <template #menu>
            <ManagerMenuOrder />
        </template>
        <template #content>
            <OrderToday :api="managerRestaurantOrdersTodayInitialDataComposable" />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
definePageMeta({
    middleware: 'manager',
});
import { defineComponent } from 'vue';
import ManagerMenuOrder from '~/components/manager/menu/ManagerMenuOrder.vue';
import OrderToday from '~/components/order/OrderToday.vue';
import { managerRestaurantOrdersTodayInitialDataComposable } from '~/composables/manager/order/time-order/today/manager-restaurant-orders-today-initial-data.composable';
export default defineComponent({
    components: {
        OrderToday,
        ManagerMenuOrder,
    },
    setup() {
        return {
            managerRestaurantOrdersTodayInitialDataComposable,
        };
    },
});
</script>

<style scoped></style>
