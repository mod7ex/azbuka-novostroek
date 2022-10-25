<script setup lang="ts">
import TheBreadCrumb from "~/components/TheBreadCrumb.vue";
import BuildingCard from "~/components/Partials/catalog/Card.vue";
import BuildingDescription from "~/components/Partials/catalog/Description.vue";
import BuildingLocation from "~/components/Partials/catalog/Location.vue";
import BuildingChoices from "~/components/Partials/catalog/Choices.vue";
import BuildingPlan from "~/components/Partials/catalog/Plan.vue";
import BuildingMortgage from "~/components/Partials/catalog/Mortgage.vue";
import BuildingPromotion from "~/components/Partials/catalog/Promotion.vue";
import BuildingDiscounts from "~/components/Partials/catalog/Discounts.vue";
import BuildingReviews from "~/components/Partials/catalog/Reviews.vue";
import BuildingSuggestions from "~/components/Partials/home/Suggestions.vue";
import CTASVG from "~/assets/svg/cta.svg";

import Building from "~/components/Partials/Building.vue";
</script>

<template>
    <div class="relative">
        <NuxtLayout name="inner">
            <!-- 59 + 31 = 90 -->
            <app-width class="mt-7 md:mt-[59px] mb-[33px] md:mb-[100px]" tag="section">
                <the-bread-crumb class="mb-[19px] md:mb-[40px]" />
                <building-card />
            </app-width>

            <app-width class="tow-cols-md">
                <div class="left">
                    <building-description class="mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />
                    <building-location class="mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                    <div class="mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md md:pt-[40px]">
                        <building-choices class="mb-[25px] md:mb-[63px]" />
                        <building-plan class="mb-[25px]" />
                    </div>

                    <building-mortgage class="mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                    <building-promotion class="mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                    <building-discounts class="mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                    <div class="bg-[#F9F9F9] md:bg-transparent mb-[37px] md:mb-[30px]">
                        <div class="bg-[#F9F9F9] shadow-inner-md md:pt-[38px] md:pb-[50px] w-fit">
                            <building-reviews class="bg-[#F9F9F9] md:rounded-[3px]" />
                        </div>
                    </div>

                    <div>
                        <building-suggestions :count="4" class="md:hidden" />

                        <div class="hidden md:flex buildings-gallery">
                            <div class="relative left">
                                <button class="text-white w-[50px] h-[50px] top-0 bottom-0 my-auto absolute right-[-25px] z-50 bg-[#1DA958] rounded-[2px]">
                                    <app-i name="material-symbols:arrow-right-alt-rounded" />
                                </button>
                                <div class="pl-[10px] pr-[20px] overflow-x-scroll no-scroll-thum py-14 flex gap-3 md:gap-[30px]">
                                    <Building v-for="i in 8" :key="i" under-construction shadow class="min-w-[308px]" />
                                </div>
                            </div>

                            <div class="bridge-shadow relative z-50 climp right"></div>
                        </div>
                    </div>
                </div>

                <div class="right">
                    <div class="h-full">
                        <div class="shadow-inner-md sticky top-2 pt-[56px]">
                            <div class="mx-auto w-fit">
                                <p class="text-[28px] leading-8 font-extrabold font-[Raleway] mb-[14px]">Позвоните нам</p>

                                <div class="font-[Inter] mb-5">
                                    <p class="font-extrabold text-xl leading-6 text-[#E71F61] mb-1">+7 (863) 548-21-38</p>
                                    <p class="font-light text-base leading-5 text-[#8C8C8C]">с 09:00 — 21:00</p>
                                </div>

                                <div class="mb-[23px]">
                                    <p class="mb-[14px]">
                                        <app-i name="ic:round-phone" class="mr-[13px] text-[#E71F61]" />
                                        <span>Заказать звонок</span>
                                    </p>
                                    <p class="mb-[14px] text-[#3478F6]">
                                        <app-i name="mdi:eye" class="mr-[13px]" />
                                        <span class="underline">Записаться на просмотр</span>
                                    </p>
                                    <p class="mb-[14px]">
                                        <app-i name="mingcute:whatsapp-fill" class="mr-[13px] text-[#4CAF50]" />
                                        <span>Написать в WhatsApp</span>
                                    </p>
                                    <p>
                                        <app-i name="mingcute:telegram-fill" class="mr-[13px] text-[#039BE5]" />
                                        <span>Написать в Telegram</span>
                                    </p>
                                </div>

                                <div>
                                    <Button class="w-full text-white bg-[#3478F6] mb-[10px] px-0 flex items-center justify-center">
                                        <span class="mr-[15px] font-[Inter] text-[14px] font-bold leading-4 whitespace-nowrap">Telgram- bot</span>
                                        <app-i name="bi:android2" />
                                    </Button>
                                    <Button class="w-full text-white bg-[#E71F61] px-0 flex items-center justify-center">
                                        <span class="mr-[15px] font-[Inter] text-[14px] font-bold leading-4 whitespace-nowrap">Чат с консультантом</span>
                                        <app-i name="ph:chat-circle-text" />
                                    </Button>
                                </div>
                            </div>

                            <div>
                                <app-img :src="CTASVG" alt="" class="ml-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </app-width>
        </NuxtLayout>
    </div>
</template>

<style lang="scss" scoped>
.buildings-gallery {
    .left {
        width: 95%;
    }

    .right {
        width: 5%;
    }

    .bridge-shadow {
        @include shadow($x: -20px, $y: 0, $blur: 17px, $spread: -20px, $color: rgba(0, 0, 0, 0.5));
    }

    .climp {
        clip-path: inset(0 100% 0 -40px);
    }
}

.tow-cols-md {
    @include break_point(1100px) {
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(12, minmax(0, 1fr));

        .left {
            grid-column: span 8 / span 8;
        }

        .right {
            grid-column: span 4 / span 4;
        }
    }
}
</style>
