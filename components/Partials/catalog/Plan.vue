<script setup lang="ts">
import ApartmentPlan from "~/components/Partials/catalog/ApartmentPlan.vue";

const current = shallowRef(0);

const options = ["Все", "1а комнатные", "2х комнатные", "3х комнатные"];
</script>

<template>
    <div>
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0']">
            <template #head>
                <h1 class="text-[26px] font-bold leading-9 font-[Raleway] text-[#131313] mb-4">Планировки</h1>

                <x-scroll-header :choices="options" v-model="current" class="mb-[28px]" buttons />

                <!-- <div class="overflow-x-scroll flex gap-2 no-scroll-thum font-medium text-[13px] leading-[15px] font-[Inter] mb-[28px]">
                    <button class="whitespace-nowrap py-2 px-[10px] bg-[#1DA958] rounded-[3px] text-white">Все</button>
                    <button class="whitespace-nowrap py-2 px-[10px] bg-[#D2EEDE] rounded-[3px]">1а комнатные</button>
                    <button class="whitespace-nowrap py-2 px-[10px] bg-[#D2EEDE] rounded-[3px]">2х комнатные</button>
                    <button class="whitespace-nowrap py-2 px-[10px] bg-[#D2EEDE] rounded-[3px]">3х комнатные</button>
                </div> -->
            </template>

            <apartment-plan class="mb-[13px]" />
            <apartment-plan class="mb-[25px]" />

            <template #foot>
                <div class="text-center">
                    <Button label="Загрузить еще" class="bg-[#E71F61] mb-[29px]" />
                </div>
                <dashed-devider />
            </template>
        </NuxtLayout>
    </div>
</template>
