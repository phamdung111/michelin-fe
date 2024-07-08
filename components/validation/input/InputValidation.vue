<template>
    <span v-if="isFailed" class="text-[12px] text-primaryOrange">{{ content }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InputValidation',
    props: {
        content: {
            type: String,
            default: '',
        },
        isFailed: {
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
