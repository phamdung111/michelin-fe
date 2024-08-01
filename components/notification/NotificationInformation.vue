<template>
    <div
        v-if="countNotification"
        :class="`w-[${size}px] h-[${size}px]`"
        class="rounded-full bg-primaryOrange text-primaryWhite flex items-center justify-center font-bold hover:cursor-pointer">
        <h6>
            {{ countNotification }}
        </h6>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useUserStore } from '~/store/user';
import { useOrderStore } from '~/store/order';
import { ownRestaurantCountOrdersInitialComposable } from '~/composables/own-restaurant/order/initial/time-order/today/own-restaurant-count-orders-initial.composable';
import { managerRestaurantCountOrdersInitialData } from '~/composables/manager/order/time-order/today/manager-restaurant-count-orders-initial-data.composable';
export default defineComponent({
    name: 'NotificationInformation',
    props: {
        size: {
            type: Number,
            default: 30,
        },
    },
    setup() {
        const user = useUserStore();
        const order = useOrderStore();
        const countNotification = ref(0);
        watch(
            () => order.countOrderToday,
            () => {
                countNotification.value = order.countOrderToday;
            }
        );
        onMounted(async () => {
            if (user.isOwn) {
                await ownRestaurantCountOrdersInitialComposable();
                setInterval(async () => {
                    await ownRestaurantCountOrdersInitialComposable();
                    countNotification.value = order.countOrderToday;
                }, 60000);
            }
            if (user.isManager) {
                await managerRestaurantCountOrdersInitialData();
                setInterval(async () => {
                    await managerRestaurantCountOrdersInitialData();
                    countNotification.value = order.countOrderToday;
                }, 60000);
            }
            countNotification.value = order.countOrderToday;
        });
        return {
            countNotification,
        };
    },
});
</script>

<style scoped></style>
