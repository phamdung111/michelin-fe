export const googleConfig = () => {
    const config = useRuntimeConfig();
    const google = {
        clientId: config.public.googleClientId,
        clientSecret: config.public.googleClientSecret,
        redirectUri: config.public.googleClientRedirectUri,
    };
    return google;
};
