<template>
    <nuxt-layout name="main-layout">
        <MainRestaurant />
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainRestaurant from '~/components/restaurant/MainRestaurant.vue';
export default defineComponent({
    components: {
        MainRestaurant,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
