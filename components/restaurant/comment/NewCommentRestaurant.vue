<template>
    <div @keyup.enter.prevent="comment()">
        <div class="flex gap-2 mt-1">
            <input v-model="newComment" type="text" placeholder="New comment" class="h-[48px] mb-2 border w-full rounded-lg shadow-lg px-2 focus:outline-none" />
            <div @click.prevent="comment()" class="w-[140px]">
                <BaseButton class="shadow-lg" content="comment" :disable="!isComment" :bg-color="isComment ? 'primaryGreen' : 'primaryOrange'" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '~/components/button/BaseButton.vue';
import { accountCommentSubmitterComposable } from '~/composables/account/comment/account-comment-submitter.composable';
import { useRestaurantStore } from '~/store/restaurant';
import { useUserStore } from '~/store/user';
export default defineComponent({
    name: 'NewCommentRestaurant',
    components: {
        BaseButton,
    },
    setup() {
        const user = useUserStore();
        const restaurant = useRestaurantStore();
        const newComment = ref('');
        const isComment = ref(false);
        const comment = async () => {
            const response = await accountCommentSubmitterComposable({ restaurantId: restaurant.restaurantSelected.restaurant?.id!, content: newComment.value });

            if (response) {
                restaurant.newComment({
                    id: response,
                    content: newComment.value,
                    user: {
                        id: user.id,
                        name: user.name,
                        avatar: user.avatar,
                    },
                });
                newComment.value = '';
            }
        };
        watch(
            () => newComment.value,
            () => {
                newComment.value ? (isComment.value = true) : (isComment.value = false);
            }
        );
        return {
            newComment,
            isComment,
            comment,
        };
    },
});
</script>

<style scoped></style>
