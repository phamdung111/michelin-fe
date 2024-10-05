<template>
    <div class="min-w-[480px] min-h-[650px] border bg-white rounded-md flex flex-col shadow-lg">
        <div class="h-[50px] border-b flex items-center pl-3 font-normal">
            <span>Notification</span>
        </div>
        <div class="w-full h-full flex justify-center items-center flex-1">
            <div class="flex flex-col justify-center items-center">
                <Icon name="material-symbols:notifications-outline" size="100" class="text-primaryColor3 opacity-50"></Icon>
                <span>Your notifications appears here</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NotificationInformation',
    setup() {
        const notification = ref();

        return {
            notification,
        };
    },
});
</script>

<style scoped></style>
