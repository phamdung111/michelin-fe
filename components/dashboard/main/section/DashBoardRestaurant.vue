<template>
    <div v-if="restaurant.total">
        <MainSectionBase :items="restaurant.restaurants" :ability-like="true">
            <template #title>
                <h2>Restaurants</h2>
            </template>
        </MainSectionBase>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainSectionBase from './MainSectionBase.vue';
import BaseButton from '~/components/button/BaseButton.vue';
import { restaurantsInitialDataComposable } from '~/composables/restaurant/initial/restaurants-initial-data.composable';
import { useRestaurantStore } from '~/store/restaurant';
import { useUiStore } from '~/store/ui';
export default defineComponent({
    name: 'DashboardRestaurant',
    components: {
        MainSectionBase,
        BaseButton,
    },
    setup() {
        const ui = useUiStore();
        const restaurant = useRestaurantStore();

        onBeforeMount(async () => {
            await restaurantsInitialDataComposable(8, 1);
        });
        return {
            ui,
            restaurant,
        };
    },
});
</script>

<style scoped></style>
