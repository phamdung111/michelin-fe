<template>
    <div>
        <Icon :size="String(size)" name="material-symbols-light:favorite-outline-rounded"></Icon>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LikeButton',
    props: {
        size: {
            type: Number,
            default: 0,
        },
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
