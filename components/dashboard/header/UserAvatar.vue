<template>
    <div class="w-[40px] h-[40px]">
        <img class="w-full h-full rounded-full" src="@/assets/images/michelin-default-profile-image.png" alt="" />
        <Icon name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'UserAvatar',
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
