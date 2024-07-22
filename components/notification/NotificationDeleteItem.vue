<template>
    <div v-if="ui.notificationDelete.itemDelete?.name" class="fixed w-screen h-screen top-0 left-0 z-notification">
        <div class="flex justify-center items-center w-full h-full">
            <div class="p-6 bg-primaryWhite rounded-lg shadow-lg border">
                <h4>Are you want delete {{ ui.notificationDelete.itemDelete.name }} ?</h4>
                <div class="mt-[15px] grid gap-1">
                    <BaseButton @click.prevent="DeleteItem()" content="Delete" bg-color="primaryGreen" />
                    <BaseButton @click.prevent="cancelDelete()" content="Cancel" bg-color="primaryOrange" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUiStore } from '~/store/ui';
import BaseButton from '../button/BaseButton.vue';
export default defineComponent({
    name: 'NotificationDeleteItem',
    components: {
        BaseButton,
    },
    setup() {
        const ui = useUiStore();
        const cancelDelete = () => {
            ui.clearNotificationDelete();
        };
        const DeleteItem = () => {
            ui.deleteItemNotification();
        };
        return {
            ui,
            cancelDelete,
            DeleteItem,
        };
    },
});
</script>

<style scoped></style>
