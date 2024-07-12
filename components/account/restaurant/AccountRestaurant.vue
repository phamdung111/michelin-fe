<template>
    <div class="flex justify-center">
        <div class="max-w-[1200px] w-full md:w-[600px] lg:w-full pb-[40px]">
            <div v-if="user.id">
                <div class="w-full flex justify-end">
                    <div @click.prevent="openFormNewRestaurant()" class="mt-2">
                        <BaseButton class="text-[14px] px-2" content="New Restaurant" :size="48" />
                    </div>
                </div>
                <MyRestaurants />
            </div>
            <NotLogged v-else />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '~/components/button/BaseButton.vue';
import RestaurantForm from '~/components/form/restaurant/RestaurantForm.vue';
import MyRestaurants from './MyRestaurants.vue';
import { useUiStore } from '~/store/ui';
import { useUserStore } from '~/store/user';

export default defineComponent({
    name: 'AccountRestaurant',
    components: {
        BaseButton,
        RestaurantForm,
        MyRestaurants,
    },
    setup() {
        const ui = useUiStore();
        const user = useUserStore();
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
