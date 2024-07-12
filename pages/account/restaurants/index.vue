<template>
    <nuxt-layout name="account-layout">
        <template #title> My restaurant </template>
        <template #content>
            <AccountRestaurant />
        </template>
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AccountRestaurant from '~/components/account/restaurant/AccountRestaurant.vue';
export default defineComponent({
    components: {
        AccountRestaurant,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
