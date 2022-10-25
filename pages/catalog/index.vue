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

import Building from "~/components/Partials/Building.vue";
</script>

<template>
    <div class="relative">
        <NuxtLayout name="inner">
            <!-- 59 + 31 = 90 -->
            <app-width class="mt-7 md:mt-[59px] mb-[33px] md:mb-[100px] br-rouge" tag="section">
                <the-bread-crumb class="mb-[19px] md:mb-[40px]" />
                <building-card />
            </app-width>

            <app-width class="mb-[44px] md:mb-[30px] br-rouge" tag="section">
                <div class="max-w-[870px]">
                    <!-- flex later -->
                    <building-description class="mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />
                    <building-location class="mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                    <div class="mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md md:pt-[40px]">
                        <building-choices class="mb-[25px] md:mb-[63px]" />
                        <building-plan class="mb-[25px]" />
                    </div>

                    <building-mortgage class="mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                    <building-promotion class="mb-[34px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                    <building-discounts class="md:bg-white md:rounded-[3px] shadow-inner-md" />
                </div>
            </app-width>

            <app-width class="bg-[#F9F9F9] md:bg-transparent mb-[37px] md:mb-[30px] br-rouge" tag="section">
                <div class="bg-[#F9F9F9] shadow-inner-md md:pt-[38px] md:pb-[50px] w-fit">
                    <building-reviews class="bg-[#F9F9F9] md:rounded-[3px] max-w-[870px]" />
                </div>
            </app-width>

            <app-width class="md:px-0 br-rouge" tag="section">
                <building-suggestions :count="4" class="md:hidden" />

                <div class="hidden md:flex suggestions-outer">
                    <!-- 870 + 60 = 930 -->
                    <div class="relative max-w-[930px] w-full">
                        <button class="text-white w-[50px] h-[50px] top-0 bottom-0 my-auto absolute right-[-25px] z-50 bg-[#1DA958] rounded-[2px]">
                            <app-i name="material-symbols:arrow-right-alt-rounded" />
                        </button>
                        <div class="pl-[60px] pr-[20px] overflow-x-scroll no-scroll-thum py-14 flex gap-3 md:gap-[30px]">
                            <!-- 26 + 2 = 28 -->
                            <Building v-for="i in 8" :key="i" under-construction shadow class="min-w-[308px]" />
                        </div>
                    </div>

                    <div class="bridge-shadow relative flex-grow z-50 climp"></div>
                </div>
            </app-width>

            <div class="bg-green-600 sticky top-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius inventore itaque corporis aut consequuntur porro quaerat, sed libero vitae laudantium nisi voluptatem quo, perferendis blanditiis quis aspernatur natus ea voluptatum?</div>
        </NuxtLayout>
    </div>
</template>

<style lang="scss" scoped>
.bridge-shadow {
    @include shadow($x: -20px, $y: 0, $blur: 17px, $spread: -20px, $color: rgba(0, 0, 0, 0.3));
}

.climp {
    clip-path: inset(0 100% 0 -40px);
}
</style>
