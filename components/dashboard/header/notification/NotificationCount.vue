<template>
    <div
        v-if="notification.numberNewNotification"
        :class="`w-[${size}px] h-[${size}px]`"
        class="rounded-full bg-primaryOrange text-primaryWhite flex items-center justify-center font-bold hover:cursor-pointer">
        <h6>{{ notification.numberNewNotification }}</h6>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useUserStore } from '~/store/user';
import { useNotificationStore } from '~/store/notification';
import type { NotificationResponseInterface } from '~/interface/response/notification/notification-response.interface';
import { countNewNotificationComposable } from '~/composables/notification/count-new-notification.composable';
export default defineComponent({
    name: 'NotificationCount',
    props: {
        size: {
            type: Number,
            default: 30,
        },
    },
    setup() {
        const notification = useNotificationStore();
        const user = useUserStore();
        const { $pusher } = useNuxtApp();
        onMounted(async () => {
            await countNewNotificationComposable();
        });

        watch(
            () => user.channels,
            () => {
                if (user.channels.length) {
                    user.channels.forEach((item) => {
                        const channel = $pusher.subscribe(`private-${item}`);
                        channel.bind('order.created', (data: any) => {
                            if (data.notification as NotificationResponseInterface) {
                                notification.moreNewNotification(data.notification);
                            }
                        });
                    });
                }
            }
        );

        return {
            notification,
        };
    },
});
</script>

<style scoped></style>
