<template>
    <div class="flex justify-center relative">
        <div class="absolute top-0 right-0">
            <div class="w-full flex justify-end">
                <div v-if="user.isUser" @click.prevent="openFormNewRestaurant()" class="mt-2">
                    <BaseButton class="text-[14px] px-2" content="New Restaurant" :size="48" />
                </div>
            </div>
        </div>
        <div class="max-w-[600px] w-[600px] py-[40px]">
            <EditAccountForm v-if="user.id" />
            <NotLogged v-else />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserAvatar from '../../dashboard/header/UserAvatar.vue';
import EditAccountForm from '../../form/account/EditAccountForm.vue';
import BaseButton from '~/components/button/BaseButton.vue';
import RestaurantForm from '~/components/form/restaurant/RestaurantForm.vue';
import NotLogged from '../NotLogged.vue';
import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';
export default defineComponent({
    name: 'MyInfo',
    components: {
        UserAvatar,
        EditAccountForm,
        NotLogged,
        BaseButton,
    },
    setup() {
        const user = useUserStore();
        const ui = useUiStore();
        const openFormNewRestaurant = () => {
            ui.openPopup(RestaurantForm);
        };
        return {
            user,
            openFormNewRestaurant,
        };
    },
});
</script>

<style scoped></style>
