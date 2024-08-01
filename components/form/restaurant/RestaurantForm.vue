<template>
    <div class="fixed w-screen h-screen flex">
        <div class="flex justify-center w-full items-center">
            <div class="max-w-[600px] w-[600px] bg-primaryWhite shadow-2xl border text-primaryColor7 relative">
                <Icon @click.prevent="closeNewRestaurant()" class="absolute right-2 top-2" size="30" name="mdi:close" />
                <div class="mt-[20px] flex justify-center items-center w-full">
                    <h4 class="text-[24px] font-normal">Create new my restaurant</h4>
                </div>
                <div class="px-4 py-4 border-y text-[14px]">
                    <InputValidation :isFailed="validate.name.isFailed" :content="validate.name.message" />
                    <input v-model="name" type="text" class="px-2 h-[48px] border w-full rounded-lg focus:outline-none mb-4" placeholder="Restaurant Name" />
                    <InputValidation :isFailed="validate.email.isFailed" :content="validate.email.message" />
                    <input v-model="email" type="text" class="px-2 h-[48px] border w-full rounded-lg focus:outline-none mb-4" placeholder="Email" />
                    <InputValidation :isFailed="validate.address.isFailed" :content="validate.address.message" />
                    <input v-model="address" type="text" class="px-2 h-[48px] border w-full rounded-lg focus:outline-none mb-4" placeholder="Address" />
                    <InputValidation :isFailed="validate.phone.isFailed" :content="validate.phone.message" />
                    <input v-model="phone" type="text" class="px-2 h-[48px] border w-full rounded-lg focus:outline-none mb-4" placeholder="Phone number" />
                    <InputValidation :isFailed="validate.description.isFailed" :content="validate.description.message" />
                    <input v-model="description" type="text" class="px-2 h-[48px] border w-full rounded-lg focus:outline-none mb-4" placeholder="Description" />
                    <div class="flex items-center mb-2">
                        <input v-model="allowBooking" class="mr-2" type="checkbox" name="" id="allowBooking" />
                        <label for="allowBooking">Allow Booking</label>
                    </div>
                    <div v-if="allowBooking">
                        <span>You should provide accurate information that will help customers book a table</span>
                        <div>
                            <InputValidation :isFailed="validate.totalTables.isFailed" :content="validate.totalTables.message" />
                        </div>
                        <input
                            v-model="totalTables"
                            type="number"
                            min="1"
                            class="px-2 h-[48px] border w-full rounded-lg focus:outline-none mb-4"
                            placeholder="Total tables public" />
                        <div v-if="totalTables">
                            <div class="border-b py-1">
                                <span>Tables next to the window</span>
                                <div class="grid grid-cols-10 gap-3 mt-1">
                                    <div v-for="n in totalTables" :key="n" class="flex gap-1 items-center">
                                        <div
                                            @click="toggleTableToWindow(n)"
                                            :class="tablesNextToWindow.includes(n) ? 'text-primaryOrange' : 'text-primaryGreen'"
                                            class="hover:cursor-pointer">
                                            <Icon name="material-symbols:table-restaurant-outline-rounded" />
                                            <span>- {{ n }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input v-model="totalRooms" type="number" min="1" class="px-2 h-[48px] border w-full rounded-lg focus:outline-none mb-4" placeholder="Total rooms" />
                    </div>
                    <div class="mt-2">
                        <InputValidation :isFailed="validate.avatar.isFailed" :content="validate.avatar.message" />
                        <div>
                            <input ref="avatarRestaurant" @change="selectedAvatar()" type="file" id="avatar-file" accept="image/*" class="hidden" />
                            <span class="text-primaryColor4">Upload avatar</span>
                            <label class="hover:underline pl-2 hover:text-primaryOrange" for="avatar-file">here.</label>
                        </div>
                        <div v-if="showAvatar" class="flex gap-1 mt-2">
                            <div class="relative">
                                <img class="w-[60px] h-[60px]" :src="String(showAvatar)" alt="" />
                            </div>
                        </div>
                    </div>

                    <div class="mt-2">
                        <InputValidation :isFailed="validate.image0.isFailed" :content="validate.image0.message" />
                        <div>
                            <input ref="inputFiles" @change="selectedFiles()" type="file" multiple id="inputFile" accept="image/*" class="hidden" />
                            <span class="text-primaryColor4">Upload image restaurant</span>
                            <label class="hover:underline pl-2 hover:text-primaryOrange" for="inputFile">here.</label>
                        </div>
                    </div>
                    <div v-if="isMaximumFile">
                        <span class="text-[12px] text-primaryOrange">You just only upload max 4 images</span>
                    </div>
                    <div v-if="inputFiles" class="flex gap-1 mt-2">
                        <div v-for="(file, index) in showFiles" :key="index" class="relative">
                            <Icon @click.prevent="removeImage(index)" class="absolute top-0 right-0 bg-primaryColor6 rounded-full hover:bg-primaryColor3" name="mdi:close" />
                            <img class="w-[60px] h-[60px]" :src="String(file)" alt="" />
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-4">
                    <div @click.prevent="uploadRestaurant()" class="w-[150px] pb-4">
                        <BaseButton content="Submit" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '~/components/button/BaseButton.vue';
import { restaurantFormDataSubmitterComposable } from '~/composables/account/restaurant/create/restaurant-form-data-submitter.composable';
import { restaurantFormData as form } from '~/composables/account/restaurant/create/restaurant-form-data.composable';
import { restaurantFormValidation as validate } from '~/composables/account/restaurant/create/restaurant-form-validation.composable';
import InputValidation from '~/components/validation/input/InputValidation.vue';
import { useUiStore } from '~/store/ui';
import { useUserStore } from '~/store/user';
import { ROUTE } from '~/constant/route/route.constant';
export default defineComponent({
    name: 'RestaurantForm',
    components: {
        BaseButton,
        InputValidation,
    },
    setup() {
        const ui = useUiStore();
        const user = useUserStore();
        const inputFiles = ref<HTMLInputElement | null>(null);
        const avatarRestaurant = ref<HTMLInputElement | null>(null);

        const filesSelected = ref<File[]>([]);
        const avatarSelected = ref<File>();
        const showAvatar = ref('');
        const showFiles = ref<String[]>([]);
        const isMaximumFile = ref(false);

        const name = ref('');
        const email = ref('');
        const address = ref('');
        const phone = ref('');
        const description = ref('');
        const allowBooking = ref(false);
        const totalTables = ref(null);
        const totalRooms = ref(null);
        const tablesNextToWindow = ref<number[]>([]);
        const toggleTableToWindow = (n: number) => {
            if (tablesNextToWindow.value.includes(n)) {
                const index = tablesNextToWindow.value.findIndex((number) => number === n);
                tablesNextToWindow.value.splice(index, 1);
            } else {
                tablesNextToWindow.value.push(n);
            }
        };

        const closeNewRestaurant = () => {
            ui.closePopup();
        };
        const selectedAvatar = () => {
            avatarSelected.value = avatarRestaurant.value?.files![0];
            showAvatar.value = URL.createObjectURL(avatarSelected.value!);
        };
        const selectedFiles = () => {
            if (inputFiles.value && inputFiles.value!.files!.length + filesSelected.value.length > 4) {
                isMaximumFile.value = true;
                inputFiles.value = null;
            } else {
                for (const file of inputFiles.value!.files!) {
                    filesSelected.value.push(file);
                    showFiles.value.push(URL.createObjectURL(file));
                }
                isMaximumFile.value = false;
            }
        };
        const removeImage = (index: number) => {
            showFiles.value.splice(index, 1);
            filesSelected.value.splice(index, 1);
        };
        const uploadRestaurant = async () => {
            form.payload.append('name', name.value);
            form.payload.append('email', email.value);
            form.payload.append('address', address.value);
            form.payload.append('phone', phone.value);
            form.payload.append('description', description.value);
            form.payload.append('avatar', avatarSelected.value!);
            form.payload.append('allow_booking', allowBooking.value ? 'true' : 'false');
            if (totalTables.value) {
                form.payload.append('totalTables', String(totalTables.value));
            }
            if (tablesNextToWindow.value.length) {
                form.payload.append('tablesNextToWindow', String(tablesNextToWindow.value));
            }
            if (totalRooms.value) {
                form.payload.append('totalRooms', String(totalRooms.value));
            }
            filesSelected.value.forEach((file, index) => {
                form.payload.append(`image${index}`, file);
            });
            await restaurantFormDataSubmitterComposable();
            inputFiles.value = null;
            avatarRestaurant.value = null;
            navigateTo(`/${ROUTE.OWN_RESTAURANT.MY_RESTAURANT}`);
        };
        onMounted(() => {
            email.value = user.email;
            phone.value = user.phone;
        });
        return {
            inputFiles,
            avatarRestaurant,
            avatarSelected,
            showAvatar,
            showFiles,
            isMaximumFile,
            form,
            name,
            email,
            address,
            phone,
            description,
            allowBooking,
            validate,
            totalTables,
            totalRooms,
            tablesNextToWindow,
            closeNewRestaurant,
            selectedFiles,
            removeImage,
            uploadRestaurant,
            toggleTableToWindow,
            selectedAvatar,
        };
    },
});
</script>

<style scoped></style>
