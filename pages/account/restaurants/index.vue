<template>
    <nuxt-layout name="layout-menu">
        <template #title> My restaurant </template>
        <template #menu>
            <AccountMenu />
        </template>
        <template #content>
            <AccountRestaurant />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AccountRestaurant from '~/components/account/restaurant/AccountRestaurant.vue';
import AccountMenu from '~/components/account/menu/AccountMenu.vue';
export default defineComponent({
    components: {
        AccountRestaurant,
        AccountMenu,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
