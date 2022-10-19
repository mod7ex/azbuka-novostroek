<script setup lang="ts">
import ApartmentPlan from "~/components/Partials/catalog/ApartmentPlan.vue";

const current = shallowRef(0);

const options = ["Все", "1а комнатные", "2х комнатные", "3х комнатные"];
</script>

<template>
    <div>
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0 md:px-[46px] md:pb-[53px]']">
            <template #head>
                <h1 class="text-[26px] md:text-[18px] font-bold md:font-extrabold leading-9 md:leading-[21px] font-[Raleway] text-[#131313] mb-4 md:mb-[17px]">Планировки</h1>
                <x-scroll-header :choices="options" v-model="current" class="mb-[28px]" buttons />
            </template>

            <apartment-plan class="mb-[13px]" />
            <apartment-plan class="mb-[25px]" />

            <template #foot>
                <div class="text-center">
                    <Button label="Загрузить еще" class="bg-[#E71F61] mb-[29px] md:mb-0" />
                </div>
                <dashed-devider class="md:hidden" />
            </template>
        </NuxtLayout>
    </div>
</template>
