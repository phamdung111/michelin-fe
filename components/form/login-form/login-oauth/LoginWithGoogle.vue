<template>
    <div class="absolute">
        <!-- <p v-if="isProcessing">Processing...</p> -->
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { googleConfig } from '~/provider/google-login/google';
export default defineComponent({
    name: 'LoginWithGoogle',
    props: {
        loginWith: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const isProcessing = ref(false);
        const popupOpened = ref(false);

        const openPopup = () => {
            isProcessing.value = true;
            popupOpened.value = true;
            const clientId = googleConfig().clientId;
            const redirectUri = googleConfig().redirectUri;
            const width = 600;
            const height = 800;
            const left = window.screenX + (window.innerWidth - width) / 2;
            const top = window.screenY + (window.innerHeight - height) / 2;

            const popup = window.open(
                `https://accounts.google.com/o/oauth2/v2/auth?` +
                    `client_id=${clientId}&` +
                    `redirect_uri=${redirectUri}&` +
                    `response_type=code&` +
                    `scope=profile email openid&` +
                    `state=STATE&` +
                    `access_type=offline&` +
                    `include_granted_scopes=true&` +
                    `prompt=consent`,
                'GoogleLoginPopup',
                `width=${width},height=${height},top=${top},left=${left}`
            );

        };
        const checkUrlParams = () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            if (code) {
                sessionStorage.setItem('googleOAuthCode', code);
                console.log(code);

                window.location.search = ''; // Clear URL parameters
                isProcessing.value = false;
            } else {
                openPopup();
            }
        };

        watch(
            () => props.loginWith,
            () => {
                if (props.loginWith === 'google') {
                    checkUrlParams();
                }
            },
            { immediate: true }
        );
        return {
            isProcessing,
            popupOpened,
            openPopup,
        };
    },
});
</script>

<style scoped></style>
