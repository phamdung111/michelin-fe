<template>
    <nuxt-layout name="layout-menu">
        <template #title> Order </template>
        <template #menu>
            <OwnOrderMenu />
        </template>
        <template #content>
            <OrderToday :api="ownRestaurantOrdersTodayInitialDataComposable" />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
definePageMeta({
    middleware: 'own',
    layout: false,
});
import { defineComponent } from 'vue';
import OwnOrderMenu from '~/components/own/order/menu/OwnOrderMenu.vue';
import OrderToday from '~/components/order/OrderToday.vue';
import { ownRestaurantOrdersTodayInitialDataComposable } from '~/composables/own-restaurant/order/initial/time-order/today/own-restaurant-orders-today-initial-data.composable';

export default defineComponent({
    components: {
        OrderToday,
        OwnOrderMenu,
    },

    setup() {
        return {
            ownRestaurantOrdersTodayInitialDataComposable,
        };
    },
});
</script>

<style scoped></style>
