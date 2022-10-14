<script setup lang="ts">
import TheBreadCrumb from "~/components/TheBreadCrumb.vue";
import BuildingCard from "~/components/Partials/catalog/Card.vue";
import BuildingDescription from "~/components/Partials/catalog/Description.vue";
import BuildingLocation from "~/components/Partials/catalog/Location.vue";
import BuildingChoices from "~/components/Partials/catalog/Choices.vue";
import BuildingPlan from "~/components/Partials/catalog/Plan.vue";
import BuildingMortgage from "~/components/Partials/catalog/Mortgage.vue";
import BuildingPromotion from "~/components/Partials/catalog/Promotion.vue";
</script>

<template>
    <div>
        <NuxtLayout name="inner">
            <app-width class="mt-7">
                <TheBreadCrumb class="mb-[19px]" />
                <building-card class="mb-[33px]" />
                <building-description class="mb-[25px]" />
                <building-location class="mb-[25px]" />
                <building-choices class="mb-[25px]" />
                <building-plan class="mb-[25px]" />
                <building-mortgage class="mb-[25px]" />
                <building-promotion class="mb-[25px]" />
            </app-width>
        </NuxtLayout>
    </div>
</template>
