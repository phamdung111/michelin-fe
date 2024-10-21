<template>
    <div v-if="restaurant.restaurantSelected" class="fixed w-screen h-screen bg-primaryBgBlur top-0 right-0 z-notification flex justify-center items-center">
        <div class="mx-[10px] max-w-[700px] w-full bg-primaryWhite relative px-4 rounded-lg pb-[40px]">
            <div class="absolute top-0 right-0">
                <Icon @click.prevent="closeFormBooking()" name="mdi:close" class="text-primaryColor3 text-[25px] hover:cursor-pointer" />
            </div>
            <div class="mt-[50px] text-primaryColor text-[14px]">
                <div class="pb-4 border-b border-primaryColor6 text-primaryColor7">
                    <h2 class="text-[24px] font-bold">{{ restaurantSelected?.name }}</h2>
                </div>
                <div class="mt-[55px] text-[14px] mb-1">
                    <h4 class="font-bold text-primaryColor7">Need to Know</h4>
                    <h6>
                        We open our doors to guests on Sundays, Mondays, & Thursdays from 11:30 am until 8:00 pm, and Fridays & Saturdays from 11:30 am until 9:00 pm (drinks and
                        bar snacks available each day between 2:00 pm - 4:00 pm). Due to the capacity of seating, reservations, and weather, seating will be assigned to either
                        patio or indoor based on availability.
                    </h6>
                </div>
                <div>
                    <div class="h-[60px] border rounded-[28px] text-[12px] flex">
                        <div class="basis-1/3 px-[20px] py-[8px] grid hover:border">
                            <span>Guest</span>
                            <select v-model="countGuest" id="" class="font-bold text-[14px] focus:outline-none bg-transparent hover:cursor-pointer">
                                <option v-for="i in 12" :key="i" :value="`${i + 1} Guests`" class="font-bold">{{ i + 1 === 13 ? i + 1 + '+' : i + 1 }} Guests</option>
                            </select>
                        </div>
                        <div class="basis-1/3 w-full px-[20px] py-[8px] grid">
                            <span>Date</span>
                            <input v-model="dateOrder" class="focus:outline-none font-bold text-[14px] hover:cursor-pointer" :min="dateToday" type="date" id="selectDate" />
                        </div>
                        <div class="basis-1/3 px-[20px] py-[8px] grid">
                            <label>Time</label>
                            <select v-model="hourOrder" id="" class="bg-transparent font-bold text-[14px] focus:outline-none hover:cursor-pointer">
                                <option v-for="hour in hoursOptionCompute" :key="hour" class="font-bold">{{ hour }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mt-2">
                        <h6>Table normal</h6>
                        <div class="grid grid-cols-10 border p-2 gap-2">
                            <div
                                v-for="table in tableNormal"
                                :key="table.id"
                                class="hover:cursor-pointer"
                                :class="tableSelected?.tableNumber === table.tableNumber ? 'text-primaryOrange' : ''">
                                <div v-if="table.description === 'Normal'">
                                    <button :disabled="!tablesAvailable.includes(table.tableNumber)" @click="selectTable(table)" class="disabled:opacity-50">
                                        <span>
                                            {{ table.tableNumber }}
                                        </span>
                                        <Icon name="material-symbols:table-restaurant-outline-rounded" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div v-if="tableNextToWindow.length">
                            <h6 class="mt-3">Table next to window</h6>
                            <div class="grid grid-cols-10 border p-2">
                                <div
                                    v-for="table in tableNextToWindow"
                                    :key="table.id"
                                    @click="selectTable(table)"
                                    class="hover:cursor-pointer"
                                    :class="tableSelected?.tableNumber === table.tableNumber ? 'text-primaryOrange' : ''">
                                    <div v-if="table.description === 'Next to window'">
                                        <button :disabled="!tablesAvailable.includes(table.tableNumber)" @click="selectTable(table)" class="disabled:opacity-50">
                                            <span>
                                                {{ table.tableNumber }}
                                            </span>
                                            <Icon name="material-symbols:table-restaurant-outline-rounded" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="isSelectedTableOrRoom" class="text-[12px] text-primaryOrange mt-3">select table or room</div>
                <div class="mt-3" v-if="restaurantSelected?.rooms.length">
                    <h6>Room</h6>
                    <div class="grid grid-cols-10 border p-2">
                        <div
                            v-for="room in restaurantSelected?.rooms"
                            :key="room.id"
                            class="hover:cursor-pointer"
                            :class="roomSelected?.roomNumber === room.roomNumber ? 'text-primaryOrange' : ''">
                            <button :disabled="!roomsAvailable.includes(room.roomNumber)" @click="selectRoom(room)" class="disabled:opacity-50">
                                <span>{{ room.roomNumber }}</span>
                                <Icon name="material-symbols-light:meeting-room" />
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-[20px]">
                    <h4 class="font-bold text-[14px]">About {{ restaurantSelected?.name }}</h4>
                    <h6 class="text-[12px]">{{ restaurantSelected?.description }}</h6>
                </div>
                <div class="border text-primaryBlue2 mt-[20px] text-[16px]">
                    <div class="flex items-center border-b py-3 px-2 gap-3">
                        <Icon class="text-[20px]" name="material-symbols:location-on" />
                        <h2>
                            {{ restaurantSelected?.address }}
                        </h2>
                    </div>
                    <div class="flex items-center border-b py-3 px-2 gap-3">
                        <Icon name="material-symbols:call-sharp" />
                        <h2>{{ restaurantSelected?.phone }}</h2>
                    </div>
                </div>
                <div class="flex justify-end mt-[15px]">
                    <div @click.prevent="submitForm()" class="w-[150px]">
                        <BaseButton content="Book" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '~/components/button/BaseButton.vue';
import LoginForm from '../login-form/LoginForm.vue';
import { orderFormData as form } from '~/composables/account/restaurant/order/submit/order-form-data.composable';
import { orderFormDataSubmitter } from '~/composables/account/restaurant/order/submit/order-form-data-submitter.composable';
import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';
import { useRestaurantStore } from '~/store/restaurant';
import { formatDateTimeSubmitProvide } from '~/provider/format/date/format-date-time-submit.provide';
import { restaurantTablesRoomsAvailableComposable } from '~/composables/account/restaurant/order/time-order/restaurant-tables-rooms-available.composable';
export default defineComponent({
    name: 'RestaurantBookForm',
    components: {
        BaseButton,
    },
    setup() {
        const ui = useUiStore();
        const user = useUserStore();
        const restaurant = useRestaurantStore();
        const today = new Date();
        const countGuest = ref('2 Guests');
        const dateToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        const dateOrder = ref();
        const isSelectedTableOrRoom = ref(false);
        const restaurantSelected = restaurant.restaurantSelected.restaurant;
        const tableSelected = ref<Record<string, string | number> | null>();
        const roomSelected = ref<Record<string, string | number> | null>();
        const hourOrder = ref('');
        const tablesAvailable = ref<number[]>([]);
        const roomsAvailable = ref<number[]>([]);

        const selectTable = async (table: Record<string, string | number>) => {
            tableSelected.value = table;
            roomSelected.value = null;
        };
        const selectRoom = (table: Record<string, string | number>) => {
            roomSelected.value = table;
            tableSelected.value = null;
        };
        const dateTimeOrder = computed(() => {
            return formatDateTimeSubmitProvide(dateOrder.value, hourOrder.value);
        });
        const submitForm = async () => {
            if (!user.id) {
                ui.openPopup(LoginForm);
            }
            form.tableId = Number(tableSelected.value?.id);
            form.roomId = Number(roomSelected.value?.id);
            form.guests = Number(countGuest.value[0]);
            const selectedTime = dateTimeOrder.value;
            form.time = selectedTime;
            if (tableSelected.value || roomSelected.value) {
                await orderFormDataSubmitter();
            } else {
                isSelectedTableOrRoom.value = true;
            }
        };
        const hoursOption = ref(['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30']);
        const hoursOptionCompute = ref<string[]>([]);
        // handle time today
        watch(
            () => dateOrder.value,
            () => {
                const hourCurrent = today.getHours();
                if (dateOrder.value === dateToday) {
                    hoursOptionCompute.value = hoursOption.value.filter((hour) => {
                        return Number(hour.slice(0, 2)) > hourCurrent;
                    });
                } else {
                    hoursOptionCompute.value = hoursOption.value;
                }
            }
        );

        watch(
            () => dateTimeOrder.value,
            async () => {
                const response = await restaurantTablesRoomsAvailableComposable(restaurantSelected!.id, dateTimeOrder.value);
                tablesAvailable.value = response.tables;
                roomsAvailable.value = response.rooms;
            }
        );
        onMounted(async () => {
            dateOrder.value = dateToday;
            const response = await restaurantTablesRoomsAvailableComposable(restaurantSelected!.id, formatDateTimeSubmitProvide(dateOrder.value, hourOrder.value));
            tablesAvailable.value = response.tables;
            roomsAvailable.value = response.rooms;
        });
        onBeforeMount(() => {});
        hourOrder.value = hoursOption.value[0];
        const tableNormal = computed(() => {
            return restaurantSelected!.tables.filter((table: Record<string, any>) => table.description === 'Normal');
        });
        const tableNextToWindow = computed(() => {
            return restaurantSelected!.tables.filter((table: Record<string, any>) => table.description === 'Next to window');
        });
        const closeFormBooking = () => {
            ui.closePopup();
        };
        return {
            dateToday,
            hoursOption,
            hourOrder,
            restaurant,
            countGuest,
            dateOrder,
            tableNormal,
            tableNextToWindow,
            restaurantSelected,
            tableSelected,
            roomSelected,
            isSelectedTableOrRoom,
            hoursOptionCompute,
            tablesAvailable,
            roomsAvailable,
            closeFormBooking,
            submitForm,
            selectTable,
            selectRoom,
        };
    },
});
</script>

<style scoped></style>
