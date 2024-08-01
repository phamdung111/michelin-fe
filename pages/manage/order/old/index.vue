<template>
    <nuxt-layout name="layout-menu">
        <template #title> Order </template>
        <template #menu>
            <ManagerMenuOrder />
        </template>
        <template #content>
            <OrderOld :api="managerRestaurantOrdersOldInitialDataComposable" />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
definePageMeta({
    middleware: 'manager',
});
import { defineComponent } from 'vue';
import ManagerMenuOrder from '~/components/manager/menu/ManagerMenuOrder.vue';
import OrderOld from '~/components/order/OrderOld.vue';
import { managerRestaurantOrdersOldInitialDataComposable } from '~/composables/manager/order/time-order/old/manager-restaurant-orders-old-initial-data.composable';
export default defineComponent({
    components: {
        OrderOld,
        ManagerMenuOrder,
    },
    setup() {
        return {
            managerRestaurantOrdersOldInitialDataComposable,
        };
    },
});
</script>

<style scoped></style>
