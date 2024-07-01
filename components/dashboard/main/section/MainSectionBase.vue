<template>
    <div class="pt-[40px] py-[20px]">
        <div class="w-[54px] h-[4px] bg-primaryOrange"></div>
        <div class="pt-6 text-[24px] font-medium mb-6">
            <slot name="title" />
        </div>
        <div>
            <slot name="content" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MainSectionBase',
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
