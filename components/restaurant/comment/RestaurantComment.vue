<template>
    <div>
        <h3>Total comments</h3>
        <div class="flex gap-2 mt-1">
            <input v-model="newComment" type="text" placeholder="New comment" class="h-[48px] mb-2 border w-full rounded-lg shadow-2xl px-2 focus:outline-none" />
            <div class="w-[140px]">
                <BaseButton content="comment" :disable="!isComment" :bg-color="isComment ? 'primaryGreen' : 'primaryOrange'" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '~/components/button/BaseButton.vue';
export default defineComponent({
    name: 'RestaurantComment',
    components: {
        BaseButton,
    },
    setup() {
        const newComment = ref('');
        const isComment = ref(false);
        watch(
            () => newComment.value,
            () => {
                newComment.value ? (isComment.value = true) : (isComment.value = false);
            }
        );
        return {
            newComment,
            isComment,
        };
    },
});
</script>

<style scoped></style>
