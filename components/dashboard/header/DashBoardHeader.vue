<template>
    <div class="shadow-md bg-primaryWhite fixed top-0 right-0 w-full">
        <div class="flex justify-between h-[64px] items-center mx-[18px]">
            <Logo class="max-w-[170px] max-h-[24px]" />
            <div class="flex">
                <div class="hidden lg:block">
                    <div class="flex items-center h-full font-medium text-[15px]">
                        <div class="py-[6px] px-[22px]">
                            <h2>Restaurants</h2>
                        </div>
                        <div class="py-[6px] px-[22px]">
                            <h2>Favorite</h2>
                        </div>
                    </div>
                </div>
                <div class="flex gap-3 items-center px-4 py-2 border-[1px] border-primaryColor1 rounded-lg">
                    <UserAvatar></UserAvatar>
                    <Icon class="text-primaryColor" size="22" name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger" />
                </div>
            </div>
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
