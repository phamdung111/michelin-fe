<template>
    <div v-if="user.favorites" class="flex w-full justify-center">
        <div class="mt-[40px] max-w-[1200px] w-full">
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
            <div v-else class="text-center">
                <span>You have no favorites yet</span>
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
