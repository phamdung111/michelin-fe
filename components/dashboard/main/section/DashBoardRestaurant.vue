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
import CardBase from '~/components/card/CardBase.vue';
import BaseButton from '~/components/button/BaseButton.vue';
import { dashboardRestaurantsInitialDataComposable } from '~/composables/dashboard/restaurants/dashboard-restaurants-initial-data.composable';
import { useRestaurantStore } from '~/store/restaurant';
export default defineComponent({
    name: 'DashboardRestaurant',
    components: {
        MainSectionBase,
        CardBase,
        BaseButton,
    },
    setup() {
        const restaurant = useRestaurantStore();

        onMounted(async () => {
            await dashboardRestaurantsInitialDataComposable();
        });
        return {
            restaurant,
        };
    },
});
</script>

<style scoped></style>
