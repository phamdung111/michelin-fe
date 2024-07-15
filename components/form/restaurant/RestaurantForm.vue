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
                    <div class="flex items-center">
                        <input v-model="allowBooking" class="mr-2" type="checkbox" name="" id="" />
                        <label for="">Allow Booking</label>
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
export default defineComponent({
    name: 'RestaurantForm',
    components: {
        BaseButton,
        InputValidation,
    },
    setup() {
        const ui = useUiStore();
        const inputFiles = ref<HTMLInputElement | null>(null);
        const filesSelected = ref<File[]>([]);
        const showFiles = ref<String[]>([]);
        const isMaximumFile = ref(false);

        const name = ref('');
        const email = ref('');
        const address = ref('');
        const phone = ref('');
        const description = ref('');
        const allowBooking = ref(false);

        const closeNewRestaurant = () => {
            ui.closePopup();
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
            form.payload.append('allow_booking', allowBooking.value ? 'true' : 'false');
            filesSelected.value.forEach((file, index) => {
                form.payload.append(`image${index}`, file);
            });
            await restaurantFormDataSubmitterComposable();
        };
        return {
            inputFiles,
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
            closeNewRestaurant,
            selectedFiles,
            removeImage,
            uploadRestaurant,
        };
    },
});
</script>

<style scoped></style>
