<template>
    <div class="fixed w-screen h-screen bg-primaryBgBlur top-0 right-0 z-notification flex justify-center items-center">
        <div class="mx-[10px] max-w-[700px] w-full bg-primaryWhite relative px-4 rounded-lg pb-[40px]">
            <div class="absolute top-0 right-0">
                <Icon @click.prevent="closeFormBooking()" name="mdi:close" class="text-primaryColor3 text-[25px]" />
            </div>
            <div class="mt-[50px] text-primaryColor text-[14px]">
                <div class="pb-4 border-b border-primaryColor6 text-primaryColor7">
                    <h2 class="text-[24px] font-bold">{{ restaurant.name }}</h2>
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
                            <select v-model="countGuest" id="" class="font-bold text-[14px] focus:outline-none bg-transparent">
                                <option v-for="i in 12" :key="i" :value="`${i + 1} Guests`" class="font-bold">{{ i + 1 === 13 ? i + 1 + '+' : i + 1 }} Guests</option>
                            </select>
                        </div>
                        <div class="basis-1/3 w-full px-[20px] py-[8px] grid">
                            <span>Date</span>
                            <input v-model="dateOrder" class="focus:outline-none font-bold text-[14px]" :min="dateToday" type="date" id="selectDate" />
                        </div>
                        <div class="basis-1/3 px-[20px] py-[8px] grid">
                            <label>Time</label>
                            <select v-model="hourOrder" id="" class="bg-transparent font-bold text-[14px] focus:outline-none">
                                <option v-for="hour in hoursOption" :key="hour" class="font-bold">{{ hour }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="mt-[20px]">
                    <h4 class="font-bold text-[14px]">About {{ restaurant.name }}</h4>
                    <h6 class="text-[12px]">{{ restaurant.description }}</h6>
                </div>
                <div class="border text-primaryBlue2 mt-[20px] text-[16px]">
                    <div class="flex items-center border-b py-3 px-2 gap-3">
                        <Icon class="text-[20px]" name="material-symbols:location-on" />
                        <h2>
                            {{ restaurant.address }}
                        </h2>
                    </div>
                    <div class="flex items-center border-b py-3 px-2 gap-3">
                        <Icon name="material-symbols:call-sharp" />
                        <h2>{{ restaurant.phone }}</h2>
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
import { orderFormData as form } from '~/composables/account/restaurant/order/order-form-data.composable';
import { orderFormDataSubmitter } from '~/composables/account/restaurant/order/order-form-data-submitter.composable';
import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';

export default defineComponent({
    name: 'RestaurantBookForm',
    components: {
        BaseButton,
    },
    setup() {
        const ui = useUiStore();
        const user = useUserStore();
        const date = new Date();
        const dateToday = date.toISOString().slice(0, 10);

        const restaurant = ui.popup.props;
        const countGuest = ref('2 Guests');
        const dateOrder = ref(dateToday);
        const submitForm = async () => {
            if (!user.id) {
                ui.openPopup(LoginForm);
            }
            form.restaurantId = restaurant.id;
            form.guests = Number(countGuest.value[0]);

            const dateFormat = new Date(dateOrder.value);
            const formattedDate = `${dateFormat.getFullYear()}-${String(dateFormat.getMonth() + 1).padStart(2, '0')}-${String(dateFormat.getDate()).padStart(2, '0')}`;

            const [hours, minutes] = hourOrder.value.split(':');
            const isPM = hourOrder.value.includes('PM');
            const formattedTime = `${isPM && hours !== '12' ? parseInt(hours) + 12 : hours}:${minutes}`;
            const selectedTime = `${formattedDate} ${formattedTime.split(' ')[0]}`;
            form.time = selectedTime;

            await orderFormDataSubmitter();
        };
        const hoursOption = [
            '6:00 PM',
            '6:30 PM',
            '7:00 PM',
            '7:30 PM',
            '8:00 PM',
            '8:30 PM',
            '9:00 PM',
            '9:30 PM',
            '10:00 PM',
            '10:30 PM',
            '11:00 PM',
            '11:30 PM',
            '12:00 PM',
            '12:30 AM',
        ];
        const hourOrder = ref(hoursOption[0]);

        const closeFormBooking = () => {
            ui.closePopup();
        };
        return {
            date,
            dateToday,
            hoursOption,
            hourOrder,
            restaurant,
            countGuest,
            dateOrder,
            closeFormBooking,
            submitForm,
        };
    },
});
</script>

<style scoped></style>
