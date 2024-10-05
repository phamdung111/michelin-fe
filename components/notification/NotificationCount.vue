<template>
    <div
        v-if="countNotification"
        :class="`w-[${size}px] h-[${size}px]`"
        class="rounded-full bg-primaryOrange text-primaryWhite flex items-center justify-center font-bold hover:cursor-pointer">
        <h6>{{ countNotification }}</h6>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useUserStore } from '~/store/user';
import { useOrderStore } from '~/store/order';
import { ownRestaurantCountOrdersInitialComposable } from '~/composables/own-restaurant/order/initial/time-order/today/own-restaurant-count-orders-initial.composable';
import { managerRestaurantCountOrdersInitialData } from '~/composables/manager/order/time-order/today/manager-restaurant-count-orders-initial-data.composable';
export default defineComponent({
    name: 'NotificationCount',
    props: {
        size: {
            type: Number,
            default: 30,
        },
    },
    setup() {
        const user = useUserStore();
        const order = useOrderStore();
        const countNotification = ref(10);
        let newOrder = reactive({});
        watch(
            () => order.countOrderToday,
            () => {
                countNotification.value = order.countOrderToday;
            }
        );
        const { $pusher } = useNuxtApp();
        const channel = $pusher.subscribe('private-order.1');
        channel.bind('order.created', (data: any) => {
            countNotification.value = 1;

            newOrder = data;
        });
        // onMounted(async () => {
        //     if (user.isOwn) {
        //         await ownRestaurantCountOrdersInitialComposable();
        //         await ownRestaurantCountOrdersInitialComposable();
        //         countNotification.value = order.countOrderToday;
        //     }
        //     if (user.isManager) {
        //         await managerRestaurantCountOrdersInitialData();
        //         await managerRestaurantCountOrdersInitialData();
        //         countNotification.value = order.countOrderToday;
        //     }
        //     countNotification.value = order.countOrderToday;
        // });
        return {
            countNotification,
            newOrder,
        };
    },
});
</script>

<style scoped></style>
