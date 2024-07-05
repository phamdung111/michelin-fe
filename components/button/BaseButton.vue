<template>
    <button :class="`bg-${bgColor}`" class="h-[48px] font-medium w-full bg-primaryGreen rounded-md">{{ content }}</button>
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
            default: '',
        },
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
