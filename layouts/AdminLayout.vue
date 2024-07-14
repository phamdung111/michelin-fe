<template>
    <dir class="w-full px-0">
        <DashBoardHeader></DashBoardHeader>
        <div class="mt-spaceTopNav flex justify-center px-6">
            <div class="mt-4 w-full">
                <div class="w-full">
                    <div class="flex justify-start w-full">
                        <h4 class="text-[20px] font-medium text-primaryColor">
                            <slot name="title" />
                        </h4>
                    </div>
                    <AdminMainMenu />
                </div>
                <slot name="content" />
            </div>
        </div>
        <DashBoardFooter />
        <NotificationOverlay />
    </dir>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import DashBoardHeader from '~/components/dashboard/header/DashBoardHeader.vue';
import DashBoardFooter from '~/components/dashboard/footer/DashBoardFooter.vue';
import AdminMainMenu from '~/components/admin/dashboard/Menu/AdminMainMenu.vue';
import NotificationOverlay from '~/components/notification/NotificationOverlay.vue';

export default defineComponent({
    name: 'AdminLayout',
    components: {
        DashBoardHeader,
        DashBoardFooter,
        AdminMainMenu,
        NotificationOverlay,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
