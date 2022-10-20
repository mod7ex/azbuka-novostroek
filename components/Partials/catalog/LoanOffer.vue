<script setup lang="ts">
defineProps<{
    banks: string[];
}>();
</script>

<template>
    <Card v-for="(logo, i) in banks" :key="i" class="bg-[#F9F9F9] py-[14px] px-[18px] rounded-[5px] md:rounded-none mb-[10px] md:mb-5">
        <template #header>
            <div class="flex items-center justify-between mb-[13px]">
                <app-img :src="logo" class="w-[67px] h-[24px] md:w-[91px] md:h-[43px]" />

                <button class="bg-white rounded-full border-[1.6px] border-[#1da95814] relative flex items-center justify-center w-[30px] h-[30px]">
                    <app-i name="ic:round-arrow-drop-down" class="text-[#878787] absolute" />
                </button>
            </div>
        </template>

        <dashed-devider class="border-[#00000014]" />

        <div class="mt-[15px] mb-[18px] md:flex md:gap-x-[50px] md:flex-wrap">
            <div>
                <p class="mb-1 text-[14px] font-normal leading-5 text-[#8C8C8C] whitespace-nowrap">Программа</p>
                <h1 class="text-[15px] font-semibold leading-[18px] mb-[14px] w-20-char">Ипотека 0,1 % на весь период</h1>
            </div>

            <ul class="grid grid-cols-3 md:flex md:gap-[50px]">
                <li class="col-span-1">
                    <p class="text-[14px] font-normal leading-5 text-[#8C8C8C] mb-2 whitespace-nowrap">Ставка</p>
                    <p class="text-[14px] font-semibold leading-4">4 %</p>
                </li>
                <li class="col-span-1">
                    <p class="text-[14px] font-normal leading-5 text-[#8C8C8C] mb-2 whitespace-nowrap">Нач. взнос</p>
                    <p class="text-[14px] font-semibold leading-4">до 30 лет</p>
                </li>
                <li class="col-span-1">
                    <p class="text-[14px] font-normal leading-5 text-[#8C8C8C] mb-2 whitespace-nowrap">Срок кредита</p>
                    <p class="text-[14px] font-semibold leading-4">до 30 лет</p>
                </li>

                <li class="col-span-1 hidden md:inline">
                    <p class="text-[14px] font-normal leading-5 text-[#8C8C8C] mb-2 whitespace-nowrap">Платеж в месяц</p>
                    <p class="text-[14px] font-semibold leading-4">до 30 лет</p>
                </li>
            </ul>
        </div>

        <dashed-devider class="border-[#00000014] md:hidden" />

        <template #footer>
            <div class="mt-4 text-[14px] font-[Inter] flex justify-between items-center md:hidden">
                <p class="font-normal leading-5">Платеж в месяц</p>
                <b class="text-[#1DA958] font-semibold leading-4">до 30 лет</b>
            </div>
        </template>
    </Card>
</template>
