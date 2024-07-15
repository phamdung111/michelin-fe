<template>
    <div>
        <div class="pt-[80px]">
            <div>
                <div class="max-h-[444px] h-[226px] md:h-[444px] shadow-xl">
                    <img class="h-full w-full object-cover" src="@/assets/images/dashboard/footer-image.jpeg" alt="" />
                </div>
            </div>
            <div class="relative -mt-[100px]">
                <div class="mx-[57px] bg-white shadow-md rounded-lg">
                    <div class="flex">
                        <div class="px-4">
                            <img class="h-full" src="@/assets/images/dashboard/app-pic-en.jpg" alt="" />
                        </div>
                        <div class="px-4 flex items-center">
                            <div>
                                <MichelinStar class="w-[36px]"></MichelinStar>
                                <h2 class="text-[16px] md:text-[24px] font-medium">Use the app to find the best restaurants and hotels everywhere</h2>
                            </div>
                        </div>
                        <div class="px-4">
                            <div class="p-6">
                                <AppStoreIcon class="w-[150px] px-6 py-3" />
                                <ChPlayStoreIcon class="w-[150px] px-6 py-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-6">
            <div class="py-5">
                <div>
                    <div class="mb-5 pb-5">
                        <span class="text-[13px] pb-6"
                            >Michelin will process your personal data to manage your subscription and measure the performance of our campaigns and analyze your interactions with
                            our communications. Your data can be shared with others Michelin affiliate (TabletHotels and Robert Parker) in order to know you better and with your
                            consent sending you marketing offers. You can manage your communication preferences at any time or unsubscribe using the link included into all our
                            emails. To exercise your Privacy rights: Contact us. Learn more about how Michelin manage your data here.</span
                        >
                    </div>
                    <div class="mb-5 pb-5">
                        <h4 class="mb-4 font-medium">Follow us</h4>
                        <div class="h-[38px] flex gap-4">
                            <a href="https://www.instagram.com/michelinguide/" target="blank">
                                <img class="h-full" src="@/assets/images/social-media/instagram-382x.png" alt="" />
                            </a>
                            <a href="https://www.youtube.com/user/MichelinRestaurants" target="blank">
                                <YoutubeIcon class="h-full" />
                            </a>
                            <a href="https://www.facebook.com/MichelinGuideAsia/?brand_redir=2251120408448511" target="blank">
                                <FacebookIcon class="h-full" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-2">
                <div class="mb-5 py-2 border-b">
                    <h2 class="font-medium mb-4">MICHELIN Guide selections</h2>
                    <div class="grid gap-2 text-[14px] text-primaryColor3">
                        <h2 class="mb-4 font-medium">MICHELIN Guide</h2>
                        <p>About the Guide</p>
                        <p>Restaurants</p>
                        <p>Hotels</p>
                        <p>Partners</p>
                        <p>Contact Us</p>
                        <p>Leave a review</p>
                    </div>
                </div>
                <div class="pb-5">
                    <h2 class="font-medium mb-4">The MICHELIN group</h2>
                    <div class="flex gap-4">
                        <BIBMichelinMan class="w-[92px] h-[133px]"></BIBMichelinMan>
                        <div class="grid text-primaryColor3 text-[14px] justify-items-start">
                            <h2 class="cursor-pointer hover:underline">The MICHELIN Company</h2>
                            <h2 class="cursor-pointer hover:underline">MICHELIN Tires</h2>
                            <h2 class="cursor-pointer hover:underline">ViaMichelin</h2>
                        </div>
                    </div>
                </div>
                <div class="border-t border-[#af8d5a]">
                    <div class="py-[40px] flex justify-center">
                        <div class="grid justify-items-center">
                            <MichelinGuideVertical class="w-[150px] mb-8" />
                            <div class="text-[14px] text-primaryColor3">
                                <span>Copyright © 2024 MICHELIN Guide. All rights reserved.</span>
                                <div class="flex justify-center text-primaryColor4">
                                    <span class="cursor-pointer hover:underline">Terms of Use</span>
                                    <Icon name="ph:dot" />
                                    <span class="cursor-pointer hover:underline"> Cookies</span>
                                    <Icon name="ph:dot" />
                                    <span class="cursor-pointer hover:underline">Privacy Policy</span>
                                    <Icon name="ph:dot" />
                                    <span class="cursor-pointer hover:underline"> Legal Notice </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import YoutubeIcon from '~~/assets/icon/youtube-38.svg';
import FacebookIcon from '~~/assets/icon/facebook-38.svg';
import BIBMichelinMan from '~~/assets/icon/bib-michelin-man-footer.svg';
import MichelinGuideVertical from '~~/assets/icon/Michelin-guide-vertical.svg';
export default defineComponent({
    name: 'DasDashBoardFooter',
    components: {
        YoutubeIcon,
        FacebookIcon,
        BIBMichelinMan,
        MichelinGuideVertical,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
