<template>
    <div class="flex justify-between h-[64px] items-center mx-[18px]">
        <Logo class="max-w-[170px] max-h-[24px]" />
        <div>
            <UserAvatar></UserAvatar>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '~~/assets/icons/michelin-guide-logo-dark.svg';
import UserAvatar from './UserAvatar.vue';
export default defineComponent({
    name: 'DashBoardHeader',
    components: {
        Logo,
        UserAvatar,
    },
    setup() {
        return {};
    },
});
</script>
