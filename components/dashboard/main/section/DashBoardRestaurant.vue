<template>
    <MainSectionBase v-if="restaurant.restaurants.length > 0" :items="restaurant.restaurants" :ability-like="true">
        <template #title>
            <h2>Restaurants</h2>
        </template>
    </MainSectionBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainSectionBase from './MainSectionBase.vue';
import BaseButton from '~/components/button/BaseButton.vue';
import { restaurantsInitialDataComposable } from '~/composables/restaurant/initial/restaurants-initial-data.composable';
import { useRestaurantStore } from '~/store/restaurant';
export default defineComponent({
    name: 'DashboardRestaurant',
    components: {
        MainSectionBase,
        BaseButton,
    },
    setup() {
        const restaurant = useRestaurantStore();

        onMounted(async () => {
            await restaurantsInitialDataComposable(8, 1);
        });
        return {
            restaurant,
        };
    },
});
</script>

<style scoped></style>
