<template>
    <div class="w-[300px] bg-primaryWhite border shadow-xl rounded-md transition-height">
        <div class="py-[21px] pr-[34px] pl-[26px] text-[14px] text-primaryColor">
            <div class="pb-5">
                <div class="pb-[6px]">Login</div>
                <div class="pb-[6px]">Register</div>
            </div>
            <div class="py-5 border-y border-primaryColor3">
                <div class="pb-[6px]">Restaurant</div>
                <div class="pb-[6px]">Favorite</div>
                <div class="pb-[6px]">Contact us</div>
                <div class="pb-[6px]">Events</div>
            </div>
            <div class="flex items-center gap-2 pt-4">
                <Icon class="text-primaryOrange" name="material-symbols-light:location-on-rounded" />
                <span> Vietnam - English - USD </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MenuDesktop',
    setup() {
        return {};
    },
});
</script>

<style scoped>
@import '~~/assets/css/style.css';
</style>
