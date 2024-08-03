<template>
    <div class="border px-2 pt-2 rounded-lg">
        <h3 class="font-bold">{{ restaurant.restaurantSelected.comments.total }} comments</h3>
        <NewCommentRestaurant />
        <div class="my-4 grid gap-2">
            <div v-for="comment in restaurant.restaurantSelected.comments.items" :key="comment.id">
                <div class="flex gap-2 items-start relative">
                    <div class="min-w-[40px] mt-2">
                        <UserAvatar :avatar-link="comment.user.avatar" />
                    </div>
                    <div class="grid w-full">
                        <span class="mt-2 text-[16px] font-semibold">{{ comment.user.name }}</span>
                        <div v-if="commentEdit === comment.id" class="w-full">
                            <input v-model="contentEdit" type="text" class="border w-full px-1 h-[40px] focus:outline-none rounded-sm" />
                            <div class="flex justify-end items-center mt-1 gap-1 h-[30px]">
                                <BaseButton @click.prevent="editComment()" :size="30" content="save" :disable="contentEdit === comment.content" />
                                <BaseButton @click.prevent="commentEdit = 0" :size="30" bgColor="primaryOrange" content="cancel" />
                            </div>
                        </div>
                        <span v-else class="text-[14px]">{{ comment.content }}</span>
                    </div>
                    <div v-if="user.id === comment.user.id" class="absolute right-2 top-2 hover:cursor-pointer hover:pb-6 hover:pl-6 group">
                        <div class="relative">
                            <Icon name="ph:dots-three-bold" />
                            <div class="absolute top-3 px-4 py-1 right-4 hidden group-hover:block border text-[13px] shadow-lg rounded-md">
                                <button @click.prevent="openEditComment(comment.id, comment.content)" class="w-full hover:text-primaryOrange">Edit</button>
                                <button @click.prevent="deleteComment(comment.id)" class="w-full hover:text-primaryOrange">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="!restaurant.isFullComment" class="flex justify-end px-2 opacity-50 hover:opacity-100">
                <button @click.prevent="moreComment()">more</button>
            </div>
            <div v-else class="flex justify-end px-2 opacity-50 hover:opacity-100">
                <button @click.prevent="hideComment()">hide</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import NewCommentRestaurant from './NewCommentRestaurant.vue';
import UserAvatar from '~/components/dashboard/header/UserAvatar.vue';
import BaseButton from '~/components/button/BaseButton.vue';
import { restaurantCommentsGetterComposable } from '~/composables/restaurant/comment/restaurant-comments-getter.composable';
import { PER_COMMENT } from '~/enum/per-comment.enum';
import { useRestaurantStore } from '~/store/restaurant';
import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';
import { restaurantCommentService } from '~/service/restaurant/comment/restaurant-comment.service';
export default defineComponent({
    name: 'RestaurantComment',
    components: {
        NewCommentRestaurant,
        UserAvatar,
        BaseButton,
    },
    setup() {
        const user = useUserStore();
        const ui = useUiStore();
        const restaurant = useRestaurantStore();
        const offset = ref(0);
        const limit = ref(PER_COMMENT.PER_COMMENT);
        const commentEdit = ref(0);
        const contentEdit = ref('');
        const moreComment = async () => {
            offset.value += limit.value;
            await restaurantCommentsGetterComposable({
                restaurantId: restaurant.restaurantSelected.restaurant?.id!,
                offset: offset.value,
                limit: limit.value,
            });
        };
        const hideComment = async () => {
            offset.value = 0;
            restaurant.hiddenCommentRestaurantSelected(limit.value);
        };
        const deleteComment = (id: number) => {
            ui.openNotificationDelete({ name: 'comment', id: id });
        };
        const openEditComment = (id: number, content: string) => {
            commentEdit.value = id;
            contentEdit.value = content;
        };
        const editComment = async () => {
            const response = await restaurantCommentService.edit(commentEdit.value, contentEdit.value);
            if (response) {
                restaurant.editComment(commentEdit.value, contentEdit.value);
                commentEdit.value = 0;
            }
        };
        onMounted(async () => {
            await restaurantCommentsGetterComposable({
                restaurantId: restaurant.restaurantSelected.restaurant?.id!,
                offset: offset.value,
                limit: limit.value,
            });
        });
        watch(
            () => ui.notificationDelete.isDelete,
            async () => {
                if (ui.notificationDelete.isDelete === true && ui.notificationDelete.itemDelete?.name === 'comment') {
                    const response = await restaurantCommentService.delete(ui.notificationDelete.itemDelete.id);
                    if (response === true) {
                        restaurant.deleteComment(ui.notificationDelete.itemDelete.id);
                    }
                    ui.clearNotificationDelete();
                }
            }
        );
        return {
            user,
            restaurant,
            commentEdit,
            contentEdit,
            moreComment,
            hideComment,
            deleteComment,
            openEditComment,
            editComment,
        };
    },
});
</script>

<style scoped></style>
