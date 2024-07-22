<template>
    <div :class="size <= 35 ? 'text-[16px]' : 'text-[20px]'" class="cursor-pointer">
        <button
            :class="disable ? `h-[${size}px] bg-primaryWhite text-primaryColor3` : `h-[${size}px] text-primaryWhite bg-${bgColor}`"
            :disabled="disable"
            class="px-2 font-medium w-full rounded-md border">
            {{ content }}
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BaseButton',
    props: {
        content: {
            type: String,
            default: '',
        },
        bgColor: {
            type: String,
            default: 'primaryGreen',
        },
        size: {
            type: Number,
            default: 48,
        },
        disable: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
