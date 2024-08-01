<template>
    <div @click.prevent="isLike ? unLike() : like()" class="hover:cursor-pointer">
        <Icon v-if="!isLike" :size="String(size)" name="material-symbols-light:favorite-outline-rounded"></Icon>
        <Icon v-else class="text-primaryOrange" :size="String(size)" name="material-symbols-light:favorite"></Icon>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { checkLikeRestaurantComposable } from '~/composables/account/restaurant/like/check-like-restaurant.composable';
import { likeRestaurantComposable } from '~/composables/account/restaurant/like/like-restaurant.composable';
import { unLikeRestaurantComposable } from '~/composables/account/restaurant/like/un-like-restaurant.composable';
import { useRestaurantStore } from '~/store/restaurant';
export default defineComponent({
    name: 'LikeButton',
    props: {
        size: {
            type: Number,
            default: 30,
        },
        restaurantId: {
            type: Number,
            default: 0,
        },
    },
    setup(props, ctx) {
        const isLike = ref(false);
        const restaurant = useRestaurantStore();
        const like = async () => {
            const response = await likeRestaurantComposable(props.restaurantId);
            isLike.value = response;
            if (response === true) {
                ctx.emit('like');
            }
        };
        const unLike = async () => {
            const response = await unLikeRestaurantComposable(props.restaurantId);
            isLike.value = response;
            if (response === false) {
                ctx.emit('unLike');
            }
        };
        onMounted(async () => {
            const response = await checkLikeRestaurantComposable(props.restaurantId);
            isLike.value = response!;
        });
        return {
            isLike,
            like,
            unLike,
        };
    },
});
</script>

<style scoped></style>
