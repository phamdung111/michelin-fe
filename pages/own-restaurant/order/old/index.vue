<template>
    <nuxt-layout name="layout-menu">
        <template #title> Order </template>
        <template #menu>
            <OwnOrderMenu />
        </template>
        <template #content>
            <OrderOld />
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
export default defineComponent({
    components: {
        OwnOrderMenu,
        OrderOld,
    },

    setup() {
        return {};
    },
});
</script>

<style scoped></style>
