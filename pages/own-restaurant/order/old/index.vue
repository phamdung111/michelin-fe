<template>
    <nuxt-layout name="layout-menu">
        <template #title> Order </template>
        <template #menu>
            <OwnOrderMenu />
        </template>
        <template #content>
            <OrderOld :api="ownRestaurantOrdersOldInitialDataComposable" />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
definePageMeta({
    middleware: 'own',
});
import { defineComponent } from 'vue';
import OwnOrderMenu from '~/components/own/order/menu/OwnOrderMenu.vue';
import OrderOld from '~/components/order/OrderOld.vue';
import { ownRestaurantOrdersOldInitialDataComposable } from '~/composables/own-restaurant/order/initial/time-order/old/own-restaurant-orders-old-initial-data.composable';
export default defineComponent({
    components: {
        OwnOrderMenu,
        OrderOld,
    },

    setup() {
        return {
            ownRestaurantOrdersOldInitialDataComposable,
        };
    },
});
</script>

<style scoped></style>
