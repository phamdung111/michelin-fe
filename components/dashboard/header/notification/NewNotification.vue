<template>
    <div class="flex items-center gap-1">
        <UserAvatar :avatar-link="notification.actorAvatar" />
        <div>
            <span class="font-medium">{{ notification.actorName }}</span>
            <span>{{ ` ${notification.description}` }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { NotificationResponseInterface } from '~/interface/response/notification/notification-response.interface';
import UserAvatar from '../UserAvatar.vue';
export default defineComponent({
    name: 'NewNotification',
    components: {
        UserAvatar,
    },
    props: {
        notification: {
            type: Object as PropType<NotificationResponseInterface>,
            default: null,
        },
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
