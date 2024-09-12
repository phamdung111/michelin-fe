export const githubConfig = () => {
    const config = useRuntimeConfig();
    const github = {
        clientId: config.public.githubClientId,
        clientSecret: config.public.githubClientSecret,
        redirectUri: config.public.githubClientRedirectUri,
    };
    return github;
};
