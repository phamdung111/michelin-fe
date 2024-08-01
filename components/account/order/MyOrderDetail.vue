<template>
    <div class="grid grid-cols-4 items-center border px-2 py-1 shadow-lg text-[14px]">
        <div class="text-[16px] font-semibold">
            <h4>{{ formatTimeToHourProvider(order.time) }}</h4>
            <h4>{{ formatTimeToDateProvider(order.time) }}</h4>
        </div>
        <nuxt-link :to="`/restaurant/${order.restaurant.id}`" target="blank" class="flex gap-2 items-center hover:cursor-pointer">
            <img class="w-[60px] h-[60px]" :src="order.restaurant.avatar" alt="" />
            <h6 class="truncate">{{ order.restaurant.name }}</h6>
        </nuxt-link>
        <div>
            <h6 :class="[{ 'text-primaryBlue': order.status === 'booking' }, { 'text-primaryOrange': order.status === 'cancel' }]" class="text-center">
                {{ order.status }}
            </h6>
        </div>
        <div v-if="order.status === 'booking'" class="flex justify-end items-center h-full">
            <div class="h-[40px] w-[150px]">
                <BaseButton @click.prevent="cancelOrder(order.id)" content="cancel" bg-color="primaryOrange" />
            </div>
        </div>
        <div v-if="order.status === 'cancel'" class="flex justify-end items-center">
            <div class="h-[40px] w-[150px]">
                <BaseButton @click.prevent="bookAgain()" content="Book again" bg-color="primaryGreen" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import BaseButton from '~/components/button/BaseButton.vue';
import RestaurantBookForm from '~/components/form/restaurant/RestaurantBookForm.vue';

import { formatTimeToHourProvider } from '~/provider/format/date/format-time-to-hour.provider';
import { formatTimeToDateProvider } from '~/provider/format/date/format-time-to-date.provider';
import { accountOrderCancelStatusComposable } from '~/composables/account/order/status/account-order-cancel-status.composable';
import { useUiStore } from '~/store/ui';
import { restaurantInitialDataComposable } from '~/composables/restaurant/initial/restaurant-initial-data.composable';
export default defineComponent({
    name: 'MyOrderDetail',
    components: {
        BaseButton,
    },
    props: {
        order: {
            type: Object as PropType<Record<string, any>>,
            default: null,
        },
    },
    setup(props, emit) {
        const ui = useUiStore();
        const status = ref(props.order.status);
        const cancelOrder = async (orderId: number) => {
            const response = await accountOrderCancelStatusComposable(orderId);
            if (response === true) {
                emit.emit('changed');
            } else {
                ui.openNotification({ status: 'error', message: 'something went wrong!' });
            }
        };
        const bookAgain = async () => {
            await restaurantInitialDataComposable(props.order.restaurant.id);
            ui.openPopup(RestaurantBookForm);
        };
        return {
            status,
            formatTimeToHourProvider,
            formatTimeToDateProvider,
            cancelOrder,
            bookAgain,
        };
    },
});
</script>

<style scoped></style>
