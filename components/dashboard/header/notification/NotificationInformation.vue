<template>
    <div class="w-[480px] h-[650px] border bg-white rounded-md flex flex-col shadow-lg overflow-auto p-1">
        <div class="h-[50px] border-b flex items-center pl-3 font-normal">
            <span>Notification</span>
        </div>
        <div v-if="notification.list.length" class="p-2 grow flex flex-col gap-2 py-4 relative">
            <div v-for="item in notification.list" :key="item.actorID">
                <div @click="goTo(item.notificationType, item.notificationID)" class="p-2 hover:bg-primaryColor3 hover:bg-opacity-50 rounded-md cursor-pointer">
                    <div class="flex items-center gap-1">
                        <UserAvatar :avatarLink="item.actorAvatar" />
                        <span class="font-semibold">
                            {{ item.actorName }}
                        </span>
                        {{ item.description }}
                    </div>
                    <span class="text-[12px]">{{ formatDateTimeToPresentProvide(item.time) }}</span>
                </div>
            </div>

            <div v-if="notification.list.length < notification.total" class="absolute bottom-1 right-2">
                <div @click="moreNotifications" class="text-[13px] opacity-80 cursor-pointer">more</div>
            </div>
        </div>

        <div v-else class="w-full h-full flex justify-center items-center flex-1">
            <div class="flex flex-col justify-center items-center">
                <Icon name="material-symbols:notifications-outline" size="100" class="text-primaryColor3 opacity-50"></Icon>
                <span>Your notifications appears here</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUiStore } from '~/store/ui';
import { useNotificationStore } from '~/store/notification';
import { formatDateTimeToPresentProvide } from '~/provider/format/date/format-date-time-to-present.provide';
import UserAvatar from '../UserAvatar.vue';
import { newNotificationInitialComposable } from '~/composables/notification/new-notification-initial.composable';
import { COUNT_NOTIFICATION_TAB } from '~/enum/count-notification-tab';
import { notificationLink } from '~/provider/notification/notification-link';
export default defineComponent({
    name: 'NotificationInformation',
    components: {
        UserAvatar,
    },
    setup() {
        const ui = useUiStore();
        const notification = useNotificationStore();
        const moreNotifications = async () => {
            await newNotificationInitialComposable(notification.list.length, COUNT_NOTIFICATION_TAB.COUNT);
        };
        const goTo = (notificationType: string, entityId: number) => {
            const link = notificationLink(notificationType, entityId);
            navigateTo(`/${link}`);
            ui.closeMenu();
        };
        return {
            notification,
            moreNotifications,
            formatDateTimeToPresentProvide,
            goTo,
        };
    },
});
</script>

<style scoped></style>
