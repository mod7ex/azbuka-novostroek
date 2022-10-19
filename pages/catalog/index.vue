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
</script>

<template>
    <div>
        <NuxtLayout name="inner">
            <!-- 59 + 31 = 90 -->
            <app-width class="mt-7 md:mt-[59px] mb-[33px] md:mb-[100px]" tag="section">
                <the-bread-crumb class="mb-[19px] md:mb-[40px]" />
                <building-card />
            </app-width>

            <app-width class="mb-[44px]" tag="section">
                <div class="max-w-[870px]">
                    <!-- flex later -->
                    <building-description class="mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />
                    <building-location class="mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                    <div class="mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md md:pt-[40px]">
                        <building-choices class="mb-[25px] md:mb-[63px]" />
                        <building-plan class="mb-[25px]" />
                    </div>

                    <building-mortgage class="mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />
                    <!-- 
                        <building-promotion class="mb-[34px]" />
                        <building-discounts />
                    -->
                </div>
            </app-width>

            <!-- <app-width class="bg-[#F9F9F9] pt-[25px] pb-[41px] mb-[37px]" tag="section">
                <building-reviews />
            </app-width>

            <building-suggestions :count="4" /> -->
        </NuxtLayout>
    </div>
</template>
