<template>
    <div v-if="user.favorites" class="flex w-full justify-center">
        <div class="max-w-[1200px] w-full">
            <div class="pb-[30px] mb-[20px] border-b border-primaryColor3">
                <h6 class="py-1.5 px-6 bg-[#222222] text-primaryWhite font-semibold rounded-md w-[150px]">Restaurants</h6>
            </div>

            <div v-if="user.favorites.length">
                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                    <div v-for="favorite in user.favorites" :key="favorite.id">
                        <CardBase>
                            <template #image>
                                <img @click.prevent="goToRestaurant(favorite.restaurant.id)" class="w-full h-full object-cover" :src="favorite.restaurant.images[0]" alt="" />
                            </template>
                            <template #title>
                                {{ favorite.restaurant.name }}
                            </template>
                            <template #description>
                                {{ favorite.restaurant.address }}
                            </template>
                            <template #footer>
                                <div>
                                    <LikeButton :restaurant-id="favorite.restaurant.id" />
                                </div>
                            </template>
                        </CardBase>
                    </div>
                </div>
            </div>
            <div v-else class="text-center mt-[60px]">
                <span class="font-medium text-[1.5rem]">You have no favorites yet</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardBase from '../card/CardBase.vue';
import LikeButton from '../button/LikeButton.vue';
import { useUserStore } from '~/store/user';
export default defineComponent({
    name: 'MainFavorite',
    components: {
        CardBase,
        LikeButton,
    },
    setup() {
        const user = useUserStore();
        const goToRestaurant = (id: number) => {
            navigateTo(`restaurant/${id}`);
        };
        return {
            user,
            goToRestaurant,
        };
    },
});
</script>

<style scoped></style>
