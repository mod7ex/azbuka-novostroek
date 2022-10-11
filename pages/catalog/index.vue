<script setup lang="ts">
import TheBreadCrumb from "~/components/TheBreadCrumb.vue";
</script>

<template>
    <div>
        <NuxtLayout name="inner">
            <app-width class="mt-7">
                <TheBreadCrumb class="mb-[19px]" />
            </app-width>
        </NuxtLayout>
    </div>
</template>
