<template>
    <div class="absolute">
        <!-- <p v-if="isProcessing">Processing...</p> -->
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { githubConfig } from '~/provider/github-login/github';

export default defineComponent({
    name: 'LoginWithGithub',
    props: {
        loginWith: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const isProcessing = ref(false);
        const popupOpened = ref(false);
        const route = useRoute();
        const openPopup = () => {
            isProcessing.value = true;
            popupOpened.value = true;

            const clientId = githubConfig().clientId;
            const redirectUri = githubConfig().redirectUri;
            const width = 600;
            const height = 800;
            const left = window.screenX + (window.innerWidth - width) / 2;
            const top = window.screenY + (window.innerHeight - height) / 2;

            const popup = window.open(
                `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user:email`,
                'GitHubLoginPopup',
                `width=${width},height=${height},top=${top},left=${left}`
            );

            if (popup) {
                const interval = setInterval(() => {
                    if (popup.closed) {
                        clearInterval(interval);
                        handlePopupClosed();
                    }
                }, 1000);
            } else {
                console.error('Popup could not be opened. Please make sure popup blockers are disabled.');
                isProcessing.value = false;
            }
        };

        const handlePopupClosed = () => {
            const storedCode = sessionStorage.getItem('githubOAuthCode');
            if (storedCode) {
                sessionStorage.removeItem('githubOAuthCode');
                // Handle the OAuth code (e.g., send it to the server for exchange)
                console.log('OAuth Code:', storedCode);
            }
            isProcessing.value = false;
            popupOpened.value = false;
        };

        const checkUrlParams = () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            if (code) {
                sessionStorage.setItem('githubOAuthCode', code);
                window.location.search = ''; // Clear URL parameters
                isProcessing.value = false;
            } else {
                openPopup();
            }
        };

        watch(
            () => props.loginWith,
            () => {
                if (props.loginWith === 'github') {
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
