<template>
    <div v-if="restaurantSelected.id" class="fixed w-screen h-screen flex">
        <div class="flex justify-center w-full items-center">
            <div class="max-w-[600px] w-[600px] bg-primaryWhite shadow-2xl border text-primaryColor7 relative">
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
                    <div class="mt-3 h-full">
                        <h6 class="font-semibold text-[18px]">Images</h6>
                        <InputValidation :isFailed="showFilesRef.length <= 0" content="File is required" />
                        <InputValidation :isFailed="isMaximumFiles" content="Maximum files is 4" />

                        <div v-if="showFilesRef" class="flex h-full gap-1">
                            <div class="aspect-square basis-1/4 relative" v-for="(image, index) in showFilesRef" :key="index">
                                <img class="w-full h-full" :src="image.image" alt="" />
                                <div class="absolute flex items-center w-[15px] h-[15px] top-0.5 right-0.5 text-primaryWhite bg-primaryColor4 rounded-full hover:bg-primaryColor6">
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
                    <div class="w-full flex justify-end mt-4">
                        <div class="w-[200px] flex gap-1">
                            <BaseButton @click.prevent="closeEditRestaurant()" class="basis-1/2" content="Cancel" bgColor="primaryOrange" />
                            <BaseButton @click.prevent="updateRestaurant()" class="basis-1/2" content="Save" :disable="!isChange" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '~/components/button/BaseButton.vue';
import InputValidation from '~/components/validation/input/InputValidation.vue';
import { useUiStore } from '~/store/ui';
import { restaurantFormUpdateData as form } from '../../../composables/restaurant/account/update/restaurant-form-update-data.composable';
import { restaurantFormUpdateValidation as validate } from '../../../composables/restaurant/account/update/restaurant-form-update-validation.composable';
import { restaurantFormUpdateDataSubmitterComposable } from '~/composables/restaurant/account/update/restaurant-form-update-data-submitter.composable';

export default defineComponent({
    name: 'UpdateRestaurantForm',
    components: {
        BaseButton,
        InputValidation,
    },
    setup() {
        const ui = useUiStore();

        const isMaximumFiles = ref(false);
        const isChange = ref(false);
        const restaurantSelected = ui.popup.props;
        const imageRemoved = ref<number[]>([]);
        const filesSelected = ref<HTMLInputElement | null>(null);
        const showFilesRef = ref([...restaurantSelected.images]);
        const showFilesOriginal = ref([...restaurantSelected.images]);
        const imageAdded: File[] = [];

        const name = ref('');
        const email = ref('');
        const address = ref('');
        const phone = ref('');
        const description = ref('');
        const allowBooking = ref(false);

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
            if (allowBooking.value !== restaurantSelected.allowBooking) {
                form.payload.append('allow_booking', allowBooking.value ? '1' : '0');
            }
            if (imageRemoved.value.length) {
                form.payload.append('images_removed', imageRemoved.value.join(','));
            }
            for (const file of imageAdded) {
                form.payload.append('images[]', file);
            }
            const response = await restaurantFormUpdateDataSubmitterComposable();
            if (response) {
                ui.openNotification({ status: 'success', message: 'success' });
                for (const key of form.payload.keys()) {
                    form.payload.set(key, '');
                }
            }
        };
        onMounted(() => {
            name.value = restaurantSelected.name;
            email.value = restaurantSelected.email;
            address.value = restaurantSelected.address;
            phone.value = restaurantSelected.phone;
            description.value = restaurantSelected.description;
            allowBooking.value = restaurantSelected.allowBooking;
            showFilesRef.value = [...restaurantSelected.images];
            showFilesOriginal.value = [...restaurantSelected.images];
        });
        watch(
            [() => name.value, () => email.value, () => address.value, () => phone.value, () => description.value, () => allowBooking.value],
            ([newName, newEmail, newAddress, newPhone, newDescription, newAllowBooking]) => {
                if (
                    newName !== restaurantSelected.name ||
                    newEmail !== restaurantSelected.email ||
                    newAddress !== restaurantSelected.address ||
                    newPhone !== restaurantSelected.phone ||
                    newDescription !== restaurantSelected.description ||
                    newAllowBooking !== restaurantSelected.allowBooking
                ) {
                    isChange.value = true;
                } else {
                    isChange.value = false;
                }
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
            closeEditRestaurant,
            removeImage,
            updateRestaurant,
            selectFiles,
        };
    },
});
</script>

<style scoped></style>
