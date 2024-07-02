<template>
    <div class="px-[25px] text-[18px] font-normal text-primaryColor5">
        <div class="flex py-5">
            <div class="pr-4 border-r border-primaryColor">Login</div>
            <div class="px-4">Register</div>
        </div>
        <div class="pt-5 grid gap-2.5 py-5 border-y border-y-primaryColor5">
            <div>
                <span> Restaurants </span>
            </div>
            <div>
                <span> Favorite </span>
            </div>
            <div>
                <span> Contact us </span>
            </div>
            <div>
                <span> Events </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
