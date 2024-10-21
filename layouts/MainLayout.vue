<template>
    <div>
        <DashBoardHeader>
            <template #menu>
                <div v-if="ui.menuOpen === 'main-menu'">
                    <div class="lg:hidden">
                        <MenuMobile />
                    </div>
                    <div class="absolute top-spaceTopNav right-0 hidden lg:block">
                        <MenuDesktop />
                    </div>
                </div>
            </template>
        </DashBoardHeader>
        <div class="mt-spaceTopNav flex justify-center">
            <div class="mt-[40px] w-full px-2">
                <slot />
            </div>
        </div>
        <DashBoardFooter />
        <NotificationOverlay />
        <NotificationDeleteItem />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DashBoardHeader from '~/components/dashboard/header/DashBoardHeader.vue';
import DashBoardFooter from '~/components/dashboard/footer/DashBoardFooter.vue';
import NotificationDeleteItem from '~/components/notification/NotificationDeleteItem.vue';

import MenuMobile from '~/components/menu/MenuMobile.vue';
import MenuDesktop from '~/components/menu/MenuDesktop.vue';
import NotificationOverlay from '~/components/notification/NotificationOverlay.vue';
import { useUiStore } from '~/store/ui';
export default defineComponent({
    name: 'MainLayout',
    components: {
        DashBoardHeader,
        DashBoardFooter,
        MenuMobile,
        MenuDesktop,
        NotificationOverlay,
        NotificationDeleteItem,
    },
    setup() {
        const ui = useUiStore();
        return {
            ui,
        };
    },
});
</script>

<style scoped></style>
