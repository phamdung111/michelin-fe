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
definePageMeta({
    middleware: ['auth'],
});
import { defineComponent } from 'vue';
import { restaurantOrdersTodayCountInitialDataComposable } from '~/composables/restaurant/order/initial/today/restaurant-orders-today-count-initial-data.composable';
import { useUserStore } from '~/store/user';
import { useOrderStore } from '~/store/order';
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
            if (user.id) {
                await restaurantOrdersTodayCountInitialDataComposable();
                countNotification.value = order.countOrderToday;
            }
        });
        return {
            countNotification,
        };
    },
});
</script>

<style scoped></style>
