<template>
    <div v-if="user.id">
        <div class="grid md:flex mb-[30px]">
            <div class="flex basis-[150px] flex-col justify-between items-center text-center">
                <UserAvatar :size="150" />
                <h2 class="text-[32px] font-medium truncate">{{ user.name }}</h2>
                <label for="fileInput" class="text-[12px] text-primaryColor6">Edit</label>
                <input @input="isSelectFile()" ref="fileInput" type="file" id="fileInput" style="display: none" accept="image/*" />
            </div>
            <div class="text-primaryColor6 md:pl-[30px]">
                <h6 class="text-[14px]">About me</h6>
                <InputValidation :isFailed="validate.description.isFailed" :content="validate.description.message" />
                <textarea v-model="form.description" class="h-[100px] border mt-3 focus:outline-none px-2 py-1 rounded-md w-full" name="" id=""></textarea>
            </div>
        </div>
        <div>
            <div class="pb-[24px] border-b border-primaryColor4">
                <h4 class="text-[22px] mb-[24px]">Name & Email</h4>
                <div class="grid mb-4">
                    <span class="mb-2 text-primaryColor6 text-[14px]">Email address</span>
                    <InputValidation :isFailed="validate.email.isFailed" :content="validate.email.message" />
                    <input v-model="form.email" class="border h-[45px] text-[14px] p-4 focus:outline-none rounded-md px-2" type="text" />
                </div>
                <div class="grid mb-4">
                    <span class="mb-2 text-primaryColor6 text-[14px]">Name</span>
                    <InputValidation :isFailed="validate.name.isFailed" :content="validate.name.message" />
                    <input v-model="form.name" class="border h-[45px] text-[14px] focus:outline-none rounded-md px-2" type="text" />
                </div>
                <div class="grid mb-4">
                    <span class="mb-2 text-primaryColor6 text-[14px]">Phone -for hotel booking</span>
                    <InputValidation :isFailed="validate.phone.isFailed" :content="validate.phone.message" />
                    <input v-model="form.phone" class="border h-[45px] text-[14px] focus:outline-none rounded-md px-2" type="text" />
                </div>
            </div>
            <div class="py-[24px] border-b border-primaryColor4">
                <h4 class="text-[22px] mb-[24px]">Password</h4>
                <div class="grid mb-4">
                    <span class="mb-2 text-primaryColor7 text-[14px]">Current Password</span>
                    <InputValidation :isFailed="validate.currentPassword.isFailed" :content="validate.currentPassword.message" />
                    <input v-model="form.currentPassword" class="border h-[45px] text-[14px] focus:outline-none rounded-md px-2" type="text" />
                </div>
                <div class="grid mb-4">
                    <span class="mb-2 text-primaryColor7 text-[14px]">New Password</span>
                    <InputValidation :isFailed="validate.newPassword.isFailed" :content="validate.newPassword.message" />
                    <input v-model="form.newPassword" class="border h-[45px] text-[14px] focus:outline-none rounded-md px-2" type="text" />
                </div>
                <div class="grid mb-4">
                    <span class="mb-2 text-primaryColor7 text-[14px]">Repeat Password</span>
                    <InputValidation :isFailed="validate.repeatPassword.isFailed" :content="validate.repeatPassword.message" />
                    <input v-model="form.repeatPassword" class="border h-[45px] text-[14px] focus:outline-none rounded-md px-2" type="text" />
                </div>
            </div>
        </div>
        <div class="mt-[24px] flex justify-center">
            <div @click.prevent="updateAccount()" class="w-[180px]">
                <BaseButton content="Save" />
            </div>
        </div>
    </div>
    <div v-if="openCropper" class="fixed w-screen h-screen top-0 left-0">
        <div class="flex justify-center items-center w-full h-full">
            <div class="px-[134px] py-[88px] bg-white shadow-2xl border rounded-xl relative">
                <Icon @click.prevent="closeCropper()" class="absolute top-2 right-2 text-primaryColor6" name="mdi:close" size="40" />
                <div class="max-w-[312px] w-[312px]">
                    <h6 class="text-[14px] mb-[32px] font-medium">Add your profile photo below. Your photo is used alongside your lists, reviews and other content share.</h6>
                    <cropper
                        v-if="cropperImage"
                        ref="cropper"
                        :src="cropperImage"
                        :stencil-component="CircleStencil"
                        class="cropper border shadow-lg w-full aspect-square"></cropper>
                </div>
                <div @click.prevent="updateAvatar()" class="flex justify-center mt-[32px]">
                    <BaseButton class="w-[184px]" bgColor="primaryOrange" content="continue"></BaseButton>
                </div>
            </div>
        </div>
    </div>
    <canvas ref="canvasElement"></canvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '~/components/button/BaseButton.vue';
import InputValidation from '~/components/validation/input/InputValidation.vue';
import UserAvatar from '~/components/dashboard/header/UserAvatar.vue';
import { Cropper, CircleStencil } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
import { useUserStore } from '~/store/user';
import { accountFormData as form } from '../../../composables/account/info/account-form.-data.composable';
import { accountFormSubmitterComposable } from '../../../composables/account/info/account-form-submitter.composable';
import { accountFormValidationComposable as validate } from '~/composables/account/info/account-form-validation.composable';
import { accountFormAvatarSubmitterComposable } from '~/composables/account/avatar/account-form-avatar-submitter.composable';
import { authenticationComposable } from '~/composables/authentication/authentication-composable';
export default defineComponent({
    name: 'EditAccountForm',
    components: {
        BaseButton,
        UserAvatar,
        InputValidation,
        Cropper,
    },
    setup() {
        const user = useUserStore();
        const fileInput = ref<HTMLInputElement | null>(null);
        const openCropper = ref(false);
        const cropperImage = ref();
        const cropper = ref();

        const canvasElement = ref<HTMLCanvasElement | null>(null);
        const updateAccount = async () => {
            await accountFormSubmitterComposable();
        };
        const isSelectFile = () => {
            if (fileInput.value) {
                cropperImage.value = URL.createObjectURL(fileInput.value!.files![0]);
                openCropper.value = true;
            }
        };
        const updateAvatar = async () => {
            const { coordinates } = cropper.value.getResult();
            const image = new Image();
            image.src = cropperImage.value;
            const canvas = document.createElement('canvas');
            canvas.width = coordinates.width;
            canvas.height = coordinates.height;
            const ctx = canvas?.getContext('2d');
            ctx?.drawImage(image, -coordinates.left, -coordinates.top);

            canvas.toBlob(async (blob) => {
                const data = new FormData();
                data.append('image', blob!);
                if (data.get('image')) {
                    await accountFormAvatarSubmitterComposable(data);
                    await authenticationComposable();
                }
            });
        };
        const closeCropper = () => {
            openCropper.value = false;
            cropperImage.value = '';
            cropper.value = null;
        };
        onMounted(() => {
            form.description = user.description;
            form.name = user.name;
            form.email = user.email;
            form.phone = user.phone;
        });

        return {
            user,
            form,
            validate,
            fileInput,
            openCropper,
            cropperImage,
            cropper,
            updateAccount,
            isSelectFile,
            updateAvatar,
            closeCropper,
            CircleStencil,
            canvasElement,
        };
    },
});
</script>

<style scoped>
.cropper {
    height: 100%;
    width: 100%;
}
</style>
