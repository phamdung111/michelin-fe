<template>
    <nuxt-layout name="main-layout">
        <MainRestaurant />
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainRestaurant from '~/components/restaurant/MainRestaurant.vue';
import { restaurantInitialDataComposable } from '~/composables/restaurant/initial/restaurant-initial-data.composable';
export default defineComponent({
    components: {
        MainRestaurant,
    },
    setup() {
        const route = useRoute();
        onMounted(async () => {
            await restaurantInitialDataComposable(Number(route.params.id));
        });
        return {};
    },
});
</script>

<style scoped></style>
