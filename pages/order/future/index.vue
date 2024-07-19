<template>
    <nuxt-layout name="layout-menu">
        <template #title> Orders Today </template>
        <template #menu>
            <MainMenuOrder />
        </template>
        <template #content>
            <OrderFuture />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderFuture from '~/components/order/OrderFuture.vue';
import MainMenuOrder from '~/components/order/menu/MainMenuOrder.vue';
export default defineComponent({
    components: {
        OrderFuture,
        MainMenuOrder,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
