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
import BuildingSuggestions from "~/components/Partials/catalog/Suggestions.vue";
import CTA from "~/components/Partials/catalog/CTA.vue";
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
                    <building-description class="catalog-section-p mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                    <building-location class="catalog-section-p mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                    <div class="catalog-section-p mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md md:pt-[40px]">
                        <building-choices class="mb-[25px] md:mb-[63px]" />
                        <building-plan class="mb-[25px]" />
                    </div>

                    <building-mortgage class="catalog-section-p mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                    <building-promotion class="catalog-section-p mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                    <building-discounts class="catalog-section-p mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                    <div class="bg-[#F9F9F9] md:bg-transparent mb-[37px] md:mb-[25px]">
                        <div class="bg-[#F9F9F9] shadow-inner-md pt-[25px] px-5 pb-[41px] md:pt-[38px] md:pb-[50px] w-fit">
                            <building-reviews class="bg-[#F9F9F9] md:rounded-[3px]" />
                        </div>
                    </div>

                    <building-suggestions />
                </div>

                <div class="right">
                    <CTA class="h-full" />
                </div>
            </app-width>
        </NuxtLayout>
    </div>
</template>

<style lang="scss" scoped>
.tow-cols-md {
    .right {
        display: none;
    }

    padding-left: 0;
    padding-right: 0;

    .left {
        .catalog-section-p {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    @include break_point(768px) {
        padding-left: 60px;
        padding-right: 60px;

        .left {
            .catalog-section-p {
                padding-left: 0;
                padding-right: 0;
            }
        }
    }

    @include break_point(1100px) {
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(12, minmax(0, 1fr));

        .left {
            grid-column: span 8 / span 8;
        }

        .right {
            display: block;
            grid-column: span 4 / span 4;
        }
    }
}
</style>
