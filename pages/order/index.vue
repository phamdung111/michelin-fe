<template>
    <nuxt-layout name="layout-menu">
        <template #title> Orders Today </template>
        <template #menu>
            <MainMenuOrder />
        </template>
        <template #content>
            <OrderToday />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderToday from '~/components/order/OrderToday.vue';
import MainMenuOrder from '~/components/order/menu/MainMenuOrder.vue';
export default defineComponent({
    components: {
        OrderToday,
        MainMenuOrder,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
