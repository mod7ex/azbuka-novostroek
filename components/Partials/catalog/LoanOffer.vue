<script setup lang="ts">
const [isCollapsed, toggle] = useToggle(true);

defineProps<{
    bank: any;
    period?: number;
    advance?: Numberish;
    percents?: string;
}>();
</script>

<template>
    <Card class="bg-[#F9F9F9] py-[14px] px-[18px] rounded-[5px] md:rounded-none mb-[10px] md:mb-5">
        <template #header>
            <div :class="['flex items-center justify-between', !isCollapsed ? 'mb-[13px]' : '']">
                <!-- <app-img :title="bank?.name" :src="bank?.logo" class="w-[67px] h-[24px] md:w-[91px] md:h-[43px]" /> -->
                <p>{{ bank?.name }}</p>

                <button class="bg-white rounded-full border-[1.6px] border-[#1da95814] relative flex items-center justify-center w-[30px] h-[30px]" @click="() => toggle()">
                    <app-i name="ic:round-arrow-drop-down" :class="['text-[#878787] absolute', isCollapsed ? 'rotate-180' : '']" />
                </button>
            </div>
        </template>

        <dashed-devider class="border-[#00000014]" v-if="!isCollapsed" />

        <Transition name="search-expand" :aria-expanded="isCollapsed">
            <div class="loan-hg-6 overflow-hidden flex justify-between py-[15px]" v-if="!isCollapsed">
                <div class="mb-[18px] md:flex md:gap-x-[50px] md:flex-wrap">
                    <p class="mb-1 text-[14px] font-normal leading-5 text-[#8C8C8C] whitespace-nowrap">Программа</p>
                    <h1 class="text-[15px] font-semibold leading-[18px] mb-[14px] w-20-char">_</h1>
                    <!-- <h1 class="text-[15px] font-semibold leading-[18px] mb-[14px] w-20-char">Ипотека 0,1 % на весь период</h1> -->
                </div>

                <ul class="grid grid-cols-3 md:flex md:gap-[50px]">
                    <li class="mb-2 md:mb-0 col-span-3 md:col-span-1">
                        <p class="text-[14px] font-normal leading-5 text-[#8C8C8C] mb-2 whitespace-nowrap">Ставка</p>
                        <p class="text-[14px] font-semibold leading-4">{{ bank[percents] ?? bank?.percents }} %</p>
                    </li>
                    <li class="mb-2 md:mb-0 col-span-3 md:col-span-1">
                        <p class="text-[14px] font-normal leading-5 text-[#8C8C8C] mb-2 whitespace-nowrap">Нач. взнос</p>
                        <p class="text-[14px] font-semibold leading-4">{{ advance }}</p>
                    </li>
                    <li class="mb-2 md:mb-0 col-span-3 md:col-span-1">
                        <p class="text-[14px] font-normal leading-5 text-[#8C8C8C] mb-2 whitespace-nowrap">Срок кредита</p>
                        <p class="text-[14px] font-semibold leading-4">до {{ period ?? 30 }} лет</p>
                    </li>

                    <li class="col-span-3 md:col-span-1 hidden md:inline">
                        <p class="text-[14px] font-normal leading-5 text-[#8C8C8C] mb-2 whitespace-nowrap">Платеж в месяц</p>
                        <p class="text-[14px] font-semibold leading-4">
                            <slot name="slot-data" :bank="bank"></slot>
                        </p>
                    </li>
                </ul>
            </div>
        </Transition>

        <dashed-devider class="border-[#00000014] md:hidden" v-if="!isCollapsed" />

        <template #footer>
            <div v-if="!isCollapsed" class="mt-4 text-[14px] font-[Inter] flex justify-between items-center md:hidden">
                <p class="font-normal leading-5">Платеж в месяц</p>
                <b class="text-[#1DA958] font-semibold leading-4">
                    <slot name="slot-data" :bank="bank"></slot>
                </b>
            </div>
        </template>
    </Card>
</template>
