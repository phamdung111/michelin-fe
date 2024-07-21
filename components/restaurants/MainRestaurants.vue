<template>
    <div v-if="restaurant.total" class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        <div v-for="restaurant in restaurant.restaurants" :key="restaurant.id">
            <nuxt-link :to="`/restaurant/${restaurant.id}`" target="blank">
                <CardBase :item="restaurant">
                    <template #image>
                        <div class="relative w-full h-full">
                            <img class="w-full h-full object-cover" :src="restaurant.images[0].image" alt="" />
                            <div class="absolute top-2 right-2">
                                <div class="w-[30px] aspect-square bg-primaryWhite rounded-full flex justify-center items-center">
                                    <LikeButton :size="20" :restaurantId="restaurant.id" />
                                </div>
                            </div>
                        </div>
                    </template>
                    <template #title>{{ restaurant.address }}</template>
                    <template #description>
                        {{ restaurant.description }}
                    </template>
                    <template #footer>
                        <div class="flex justify-center">
                            <BaseButton class="w-[120px]" bgColor="primaryOrange" content="Discover" :size="45"></BaseButton>
                        </div>
                    </template>
                </CardBase>
            </nuxt-link>
        </div>
    </div>
    <div class="mt-4 w-full flex justify-center">
        <UPagination v-model="page" :page-count="restaurant.per_page" :total="restaurant.total" :max="10" show-last show-first :to="getPageUrl" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardBase from '../card/CardBase.vue';
import LikeButton from '../button/LikeButton.vue';
import BaseButton from '../button/BaseButton.vue';
import { restaurantsInitialDataComposable } from '~/composables/restaurant/initial/restaurants-initial-data.composable';
import { useRestaurantStore } from '~/store/restaurant';
export default defineComponent({
    name: 'MainRestaurants',
    components: {
        CardBase,
        LikeButton,
        BaseButton,
    },
    setup() {
        const restaurant = useRestaurantStore();
        const page = ref(1);
        const getPageUrl = async () => {
            await restaurantsInitialDataComposable(20, page.value);
        };
        onMounted(async () => {
            await restaurantsInitialDataComposable(20, page.value);
        });
        return {
            restaurant,
            page,
            getPageUrl,
        };
    },
});
</script>

<style scoped></style>
