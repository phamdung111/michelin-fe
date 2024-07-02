<template>
    <div class="shadow-md bg-primaryWhite fixed top-0 right-0 w-full z-menu">
        <div :class="isShowMenu ? 'h-screen lg:h-header transition-height' : 'h-header'" class="mx-[18px] relative">
            <div class="flex justify-between items-center">
                <LogoIcon class="max-w-[170px] max-h-[24px] w-[170px] h-[24px]" />
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
                    <div class="flex gap-3 items-center px-4 py-2 lg:border-[1px] border-primaryColor1 rounded-lg h-[58px]">
                        <UserAvatar></UserAvatar>
                        <Icon
                            @click.prevent="toggleMenu()"
                            class="text-primaryColor"
                            size="22"
                            name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger" />
                    </div>
                </div>
            </div>
            <div v-if="isShowMenu">
                <div class="lg:hidden">
                    <MenuMobile />
                </div>
                <div class="absolute top-spaceTopNav right-0 hidden lg:block">
                    <MenuDesktop />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogoIcon from '@/assets/icon/michelin-guide-logo-dark.svg';
import UserAvatar from './UserAvatar.vue';
import MenuMobile from '~/components/menu/MenuMobile.vue';
import MenuDesktop from '~/components/menu/MenuDesktop.vue';
export default defineComponent({
    name: 'DashBoardHeader',
    components: {
        UserAvatar,
        MenuMobile,
        MenuDesktop,
        LogoIcon,
    },
    setup() {
        const isShowMenu = ref(false);
        const toggleMenu = () => {
            isShowMenu.value = !isShowMenu.value;
        };
        return {
            toggleMenu,
            isShowMenu,
        };
    },
});
</script>
<style scoped>
@import '~~/assets/css/style.css';
</style>
