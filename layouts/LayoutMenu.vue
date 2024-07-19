<template>
    <nuxt-layout name="main-layout">
        <div>
            <h1 class="text-[20px]">
                <slot name="title" />
            </h1>
            <div class="my-5">
                <slot name="menu" />
            </div>
            <div class="w-full flex justify-center">
                <slot name="content" />
            </div>
        </div>
        <NotificationOverlay />
    </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LayoutMenu',
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
