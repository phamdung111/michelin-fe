<template>
    <div v-if="restaurant.restaurantSelected" class="w-full">
        <div class="pt-[40px] py-[20px] flex justify-center">
            <div class="max-w-[1200px] px-[24px] lg:px-[40px] w-full">
                <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div v-for="image in restaurant.restaurantSelected.images" :key="image.image" class="basis-1/3">
                        <div class="w-full aspect-square">
                            <img class="w-full h-full object-cover" :src="image.image" alt="" />
                        </div>
                    </div>
                </div>
                <div class="w-full mt-[40px] px-4 text-[14px] font-normal">
                    <div class="xl:flex gap-4 mb-6">
                        <div class="xl:w-2/3 border-b border-primaryColor6 pb-4 mb-[40px]">
                            <h2 class="text-[26px] font-semibold mb-[13px]">{{ restaurant.restaurantSelected.name }}</h2>
                            <h2>{{ restaurant.restaurantSelected.address }}</h2>
                            <div class="mt-[30px] flex items-center gap-2">
                                <LikeButton :restaurant-id="restaurant.restaurantSelected.id" />
                                <span class="font-medium">Add to favorites</span>
                            </div>
                        </div>
                        <div class="xl:w-1/3">
                            <div class="p-4 bg-primaryWhite shadow-lg">
                                <h6 class="mb-3 font-medium text-[1rem]">Reserve a table</h6>
                                <div>
                                    <div class="p-4 border rounded-md flex justify-between">
                                        <div class="h-[30px]">
                                            <img class="object-cover h-full" src="@/assets/images/booking/Resy-Box-Logo-Red@3x.png" alt="" />
                                        </div>
                                        <div @click.prevent="openBooking()">
                                            <BaseButton content="Book" :size="35" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="xl:w-2/3">
                        <div class="border-b border-primaryColor6 pb-[20px]">
                            <h2 class="text-[28px] font-medium mb-4">MICHELIN Guide’s Point Of View</h2>
                            <h6 class="pb-4">Bib Gourmand: good quality, good value cooking</h6>
                            <h6 class="text-[18px] font-normal">
                                Many restaurants in Vietnam focus on a concise menu starring one key ingredient. In this 40-plus-year-old shop, the menu revolves around eel as in
                                eel noodles, eel congee and eel soup. For the noodles, they use rice vermicelli which is made into noodle soup, or tossed with deep-fried shredded
                                eel, herbs, toasted peanuts and shallots. Shredded pork sausage and shiitake mushrooms are added to the soup and congee to further boost the umami.
                            </h6>
                        </div>
                        <div class="mt-[40px]">
                            <div class="border-b border-primaryColor6 pb-[20px]">
                                <h2 class="text-[28px] font-medium">Information</h2>
                            </div>
                            <div class="border-b border-primaryColor6 py-[20px]">
                                <h4>{{ restaurant.restaurantSelected.phone }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRestaurantStore } from '~/store/restaurant';
import SearchForm from '../form/SearchForm.vue';
import LikeButton from '../button/LikeButton.vue';
import BaseButton from '../button/BaseButton.vue';
import RestaurantBookForm from '../form/restaurant/RestaurantBookForm.vue';
import { useUiStore } from '~/store/ui';
export default defineComponent({
    name: 'MainRestaurant',
    components: {
        SearchForm,
        LikeButton,
        BaseButton,
        RestaurantBookForm,
    },
    setup() {
        const ui = useUiStore();
        const restaurant = useRestaurantStore();
        const openBooking = () => {
            ui.openPopupData(RestaurantBookForm, restaurant.restaurantSelected);
        };
        return {
            restaurant,
            openBooking,
        };
    },
});
</script>

<style scoped></style>
