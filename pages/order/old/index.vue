<template>
    <nuxt-layout name="layout-menu">
        <template #title> Orders Today </template>
        <template #menu>
            <MainMenuOrder />
        </template>
        <template #content>
            <OrderOld />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderOld from '~/components/order/OrderOld.vue';
import MainMenuOrder from '~/components/order/menu/MainMenuOrder.vue';
export default defineComponent({
    components: {
        OrderOld,
        MainMenuOrder,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
