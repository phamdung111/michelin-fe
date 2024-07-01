<template>
    <div class="h-[48px] bg-white border flex items-center px-2 gap-2 rounded-lg text-primaryColor font-medium">
        <Icon size="30" name="ri:search-line" class="basis-[40px] text-primaryColor3" />
        <input class="grow pl-1 focus:outline-none" type="text" name="" id="" placeholder="Search for Destination, restaurant ..." />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SearchForm',
    props: {
        size: {
            type: Number,
            default: 48,
        },
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
