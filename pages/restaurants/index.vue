<template>
    <nuxt-layout name="main-layout">
        <MainRestaurants></MainRestaurants>
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainRestaurants from '~/components/restaurants/MainRestaurants.vue';
export default defineComponent({
    components: {
        MainRestaurants,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
