<template>
    <div class="shadow-[0_0_0_1px_rgba(35,38,59,0.1),0_6px_16px_-4px_rgba(35,38,59,0.15)] pb-4 rounded-lg">
        <img class="rounded-t-lg" src="assets/images/dashboard/banner.jpeg" alt="" />
        <div class="p-4">
            <h3 class="text-[18px] font-medium line-clamp-2 overflow-hidden text-ellipsis">
                The 2024 MICHELIN Guide Vietnam Boasts 3 New One Stars, 1 First-Ever Green Star, and Bib Gourmand Venues that Double Last Year’s List
            </h3>
            <span class="text-[14px] text-primaryColor3 font-normal line-clamp-3 overflow-hidden text-ellipsis">
                Open The 2024 MICHELIN Guide Vietnam Boasts 3 New One Stars, 1 First-Ever Green Star, and Bib Gourmand Venues that Double Last Year’s List
            </span>
        </div>
        <slot name="footer" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CardBase',
    setup() {
        return {};
    },
});
</script>
