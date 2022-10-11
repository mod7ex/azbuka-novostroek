<script setup lang="ts">
import TheBreadCrumb from "~/components/TheBreadCrumb.vue";
import BuildingCard from "~/components/Partials/catalog/Card.vue";
import BuildingDescription from "~/components/Partials/catalog/Description.vue";
</script>

<template>
    <div>
        <NuxtLayout name="inner">
            <app-width class="mt-7">
                <TheBreadCrumb class="mb-[19px]" />
                <building-card class="mb-[33px]" />
                <!--  -->
                <building-description class="mb-[33px]" />
            </app-width>
        </NuxtLayout>
    </div>
</template>
