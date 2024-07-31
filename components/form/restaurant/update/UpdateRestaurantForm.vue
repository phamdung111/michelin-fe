<template>
    <div v-if="restaurantSelected.id" class="fixed w-screen h-screen top-0 left-0 overflow-scroll">
        <div class="flex justify-center w-full items-center">
            <div class="max-w-[600px] w-[600px] bg-primaryWhite shadow-2xl border text-primaryColor7">
                <dir class="relative p-0">
                    <Icon @click.prevent="closeEditRestaurant()" class="absolute right-2 top-2" size="30" name="mdi:close" />
                    <div class="mt-[20px] flex justify-center items-center w-full">
                        <h4 class="text-[24px] font-normal">Update restaurant</h4>
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
                        <div class="flex items-center">
                            <input v-model="allowBooking" class="mr-2" type="checkbox" name="" id="" />
                            <label for="">Allow Booking</label>
                        </div>
                        <div class="border border-primaryColor3 pb-3 px-2 rounded-md mt-2">
                            <span>Total tables</span>
                            <input v-model="totalTables" type="number" class="px-2 h-[48px] border w-full rounded-lg focus:outline-none mb-4" placeholder="Description" />
                            <div v-if="totalTables">
                                <div class="border-b py-1">
                                    <span>Tables next to the window</span>
                                    <div class="grid grid-cols-10 gap-3 mt-2">
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
                        </div>

                        <div class="mt-4">
                            <span>Total rooms</span>
                            <input v-model="totalRooms" type="number" class="px-2 h-[48px] border w-full rounded-lg focus:outline-none mb-4" placeholder="Description" />
                        </div>
                        <div class="mt-3 w-[150px]">
                            <label for="changeAvatar">
                                <h6 class="font-semibold text-[18px]">Avatar</h6>
                                <img class="w-full aspect-square" :src="avatarFileShow ? avatarFileShow : avatar" alt="" />
                                <input ref="avatarFileRef" @change="avatarChange()" class="hidden" id="changeAvatar" type="file" />
                            </label>
                        </div>

                        <div class="mt-3 h-full">
                            <h6 class="font-semibold text-[18px]">Images</h6>
                            <InputValidation :isFailed="showFilesRef.length <= 0" content="File is required" />
                            <InputValidation :isFailed="isMaximumFiles" content="Maximum files is 4" />

                            <div v-if="showFilesRef" class="flex h-full gap-1">
                                <div class="aspect-square basis-1/4 relative" v-for="(image, index) in showFilesRef" :key="index">
                                    <img class="w-full h-full" :src="image.image" alt="" />
                                    <div
                                        class="absolute flex items-center w-[15px] h-[15px] top-0.5 right-0.5 text-primaryWhite bg-primaryColor4 rounded-full hover:bg-primaryColor6">
                                        <Icon @click.prevent="removeImage(index)" name="mdi:close" />
                                    </div>
                                </div>
                                <div v-if="showFilesRef.length < 4" class="h-full">
                                    <input ref="filesSelected" @change="selectFiles()" class="hidden" id="selectImage" type="file" multiple />
                                    <label for="selectImage">
                                        <div class="w-[40px] h-[40px] border-2 shadow-lg flex justify-center items-center">
                                            <Icon name="material-symbols:add" />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <UpdateManger :restaurant-selected="restaurantSelected" :manager="updateManager" @user-manager-find="updateMangerRestaurant" />
                        <div class="w-full flex justify-end mt-4">
                            <div class="w-[200px] flex gap-1">
                                <BaseButton @click.prevent="closeEditRestaurant()" class="basis-1/2" content="Cancel" bgColor="primaryOrange" />
                                <BaseButton @click.prevent="updateRestaurant()" class="basis-1/2" content="Save" :disable="!isChange" />
                            </div>
                        </div>
                    </div>
                </dir>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '~/components/button/BaseButton.vue';
import InputValidation from '~/components/validation/input/InputValidation.vue';
import UpdateManger from './UpdateManger.vue';
import { useUiStore } from '~/store/ui';
import { restaurantFormUpdateData as form } from '../../../../composables/own-restaurant/restaurant/update/restaurant-form-update-data.composable';
import { restaurantFormUpdateValidation as validate } from '../../../../composables/own-restaurant/restaurant/update/restaurant-form-update-validation.composable';
import { restaurantFormUpdateDataSubmitterComposable } from '~/composables/own-restaurant/restaurant/update/restaurant-form-update-data-submitter.composable';
import { ownRestaurantInitialDataComposable } from '~/composables/own-restaurant/restaurant/initial/own-restaurants-initial-data.composable';
import type { RestaurantCheckManagerInterface } from '~/interface/response/restaurant/check-manager/restaurant-check-manager.interface';

export default defineComponent({
    name: 'UpdateRestaurantForm',
    components: {
        BaseButton,
        InputValidation,
        UpdateManger,
    },
    setup() {
        const ui = useUiStore();
        const route = useRoute();
        const isMaximumFiles = ref(false);
        const isChange = ref(false);
        const restaurantSelected = ui.popup.props;
        const imageRemoved = ref<number[]>([]);
        const filesSelected = ref<HTMLInputElement | null>(null);
        const avatarFileRef = ref<HTMLInputElement | null>(null);
        const avatarFileChange = ref<File | null>(null);
        const avatarFileShow = ref('');
        const showFilesRef = ref([...restaurantSelected.images]);
        const showFilesOriginal = ref([...restaurantSelected.images]);
        const imageAdded: File[] = [];
        const updateManager = ref<RestaurantCheckManagerInterface | null>(null);
        const avatar = ref('');
        const name = ref('');
        const email = ref('');
        const address = ref('');
        const phone = ref('');
        const description = ref('');
        const allowBooking = ref(false);
        const totalTables = ref(0);
        const tablesNextToWindow = ref<number[]>([]);
        const oldTablesNextToWindow = ref<number[]>([]);
        const totalRooms = ref();
        const closeEditRestaurant = () => {
            ui.closePopup();
        };
        const removeImage = (index: number) => {
            if (showFilesRef.value) {
                const removedImage = showFilesRef.value[index];
                if (removedImage.id) {
                    imageRemoved.value.push(removedImage.id);
                } else {
                    const fileIndex = imageAdded.findIndex((file) => URL.createObjectURL(file) === removedImage.image);
                    if (fileIndex !== -1) {
                        imageAdded.splice(fileIndex, 1);
                    }
                }
            }
            showFilesRef.value.splice(index, 1);
            if (showFilesRef.value.length === 0) {
                isChange.value = false;
                return;
            } else if (JSON.stringify(showFilesRef.value) !== JSON.stringify(showFilesOriginal.value)) {
                isChange.value = true;
            }
        };
        const avatarChange = () => {
            avatarFileChange.value = avatarFileRef.value!.files![0];
            avatarFileShow.value = URL.createObjectURL(avatarFileChange.value);
        };
        const selectFiles = () => {
            if (filesSelected.value) {
                showFilesRef.value.length + filesSelected.value.files!.length > 4 ? (isMaximumFiles.value = true) : (isMaximumFiles.value = false);
                if (!isMaximumFiles.value) {
                    for (const file of filesSelected.value.files!) {
                        showFilesRef.value.push({ image: URL.createObjectURL(file) });
                        imageAdded.push(file);
                    }
                    isChange.value = true;
                }
            }
        };
        const toggleTableToWindow = (n: number) => {
            if (tablesNextToWindow.value.includes(n)) {
                const index = tablesNextToWindow.value.findIndex((number) => number === n);
                tablesNextToWindow.value.splice(index, 1);
            } else {
                tablesNextToWindow.value.push(n);
            }
            tablesNextToWindow.value.sort();
        };

        const updateRestaurant = async () => {
            form.payload.append('id', restaurantSelected.id);
            if (name.value !== restaurantSelected.name) {
                form.payload.append('name', name.value);
            }
            if (email.value !== restaurantSelected.email) {
                form.payload.append('email', email.value);
            }
            if (address.value !== restaurantSelected.address) {
                form.payload.append('address', address.value);
            }
            if (phone.value !== restaurantSelected.phone) {
                form.payload.append('phone', phone.value);
            }
            if (description.value !== restaurantSelected.description) {
                form.payload.append('description', description.value);
            }
            if (allowBooking.value !== restaurantSelected.allow_booking) {
                form.payload.append('allow_booking', allowBooking.value ? '1' : '0');
            }
            if (imageRemoved.value.length) {
                form.payload.append('images_removed', imageRemoved.value.join(','));
            }
            if (avatarFileChange.value) {
                form.payload.append('avatar', avatarFileChange.value!);
            }
            if (totalTables.value !== restaurantSelected.tables.length) {
                form.payload.append('totalTables', String(totalTables.value));
            }
            if (totalRooms.value !== restaurantSelected.totalRooms) {
                form.payload.append('totalRooms', String(totalRooms.value));
            }
            if (!tablesNextToWindow.value.every((value, index) => value === oldTablesNextToWindow.value[index])) {
                tablesNextToWindow.value = tablesNextToWindow.value.filter((value) => value <= totalTables.value);
                form.payload.append('tablesNextToWindow', String(tablesNextToWindow.value));
            }
            for (const file of imageAdded) {
                form.payload.append('images[]', file);
            }
            if (updateManager.value !== restaurantSelected.manager) {
                form.payload.append('manager', String(updateManager.value?.id));
            }
            const response = await restaurantFormUpdateDataSubmitterComposable();
            if (response) {
                ui.openNotification({ status: 'success', message: 'success' });
                for (const key of form.payload.keys()) {
                    form.payload.set(key, '');
                }

                let page = route.query.restaurants || 1;
                await ownRestaurantInitialDataComposable(Number(page));
            }
        };
        onBeforeMount(() => {
            updateManager.value = restaurantSelected.manager;
            name.value = restaurantSelected.name;
            email.value = restaurantSelected.email;
            address.value = restaurantSelected.address;
            phone.value = restaurantSelected.phone;
            description.value = restaurantSelected.description;
            allowBooking.value = restaurantSelected.allow_booking;
            showFilesRef.value = [...restaurantSelected.images];
            showFilesOriginal.value = [...restaurantSelected.images];
            avatar.value = restaurantSelected.avatar;
            totalTables.value = restaurantSelected.tables.length;
            if (allowBooking) {
                restaurantSelected.tables.forEach((table: Record<string, string | number>) => {
                    if (table.description === 'Next to window') {
                        tablesNextToWindow.value.push(Number(table.tableNumber));
                        oldTablesNextToWindow.value.push(Number(table.tableNumber));
                    }
                });
            }
            totalRooms.value = restaurantSelected.totalRooms;
            updateManager.value = restaurantSelected.manager;
        });
        const updateMangerRestaurant = (manager: RestaurantCheckManagerInterface) => {
            manager ? (updateManager.value = manager) : (updateManager.value = restaurantSelected.manager);
        };
        watch(
            [
                () => name.value,
                () => email.value,
                () => address.value,
                () => phone.value,
                () => description.value,
                () => allowBooking.value,
                () => avatarFileChange.value,
                () => totalTables.value,
                () => tablesNextToWindow.value,
                () => totalRooms.value,
                () => updateManager.value,
            ],
            ([newName, newEmail, newAddress, newPhone, newDescription, newAllowBooking, newAvatar, newTotalTable, newTablesNextToWindow, newTotalRooms, newManager]) => {
                if (
                    newName !== restaurantSelected.name ||
                    newEmail !== restaurantSelected.email ||
                    newAddress !== restaurantSelected.address ||
                    newPhone !== restaurantSelected.phone ||
                    newDescription !== restaurantSelected.description ||
                    newAllowBooking !== restaurantSelected.allow_booking ||
                    newAvatar ||
                    newTotalTable !== restaurantSelected.tables.length ||
                    !newTablesNextToWindow.every((value, index) => value === oldTablesNextToWindow.value[index]) ||
                    newTotalRooms !== restaurantSelected.totalRooms ||
                    newManager !== restaurantSelected.manager
                ) {
                    isChange.value = true;
                } else {
                    isChange.value = false;
                }
            },
            {
                deep: true,
            }
        );

        return {
            form,
            validate,
            name,
            email,
            address,
            phone,
            description,
            allowBooking,
            showFilesRef,
            restaurantSelected,
            filesSelected,
            isMaximumFiles,
            isChange,
            avatar,
            avatarFileRef,
            avatarFileShow,
            totalTables,
            tablesNextToWindow,
            totalRooms,
            updateManager,
            closeEditRestaurant,
            removeImage,
            updateRestaurant,
            selectFiles,
            avatarChange,
            toggleTableToWindow,
            updateMangerRestaurant,
        };
    },
});
</script>

<style scoped>
::-webkit-scrollbar {
    width: 0px;
}
</style>
