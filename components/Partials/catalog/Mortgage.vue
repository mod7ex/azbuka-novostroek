<script setup lang="ts">
import RangeInput from "~/components/UI/TowThumbsRangeInput.vue";
import ApartmentPlan from "~/components/Partials/catalog/ApartmentPlan.vue";

const current = shallowRef(0);
</script>

<template>
    <div>
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0']">
            <template #head>
                <h1 class="text-[26px] font-bold leading-9 font-[Raleway] text-[#131313] mb-4">Ипотека</h1>

                <div class="choices no-scroll-thum mb-[21px] overflow-x-scroll">
                    <header class="flex gap-y-[30px] border-b-[2px] border-dotted">
                        <button @click="current = 0" :class="[current === 0 ? 'selected' : '', 'pb-[13px] whitespace-nowrap text-[15px] font-normal leading-[18px] font-[Inter]']">Все программы</button>
                        <button @click="current = 1" :class="[current === 1 ? 'selected' : '', 'pb-[13px] text-[#878787] whitespace-nowrap text-[15px] font-normal leading-[18px] font-[Inter] mx-[30px]']">Оптимальные условия</button>
                    </header>
                </div>
            </template>

            <form>
                <div class="form-section mb-[23px]">
                    <div>
                        <p class="mb-[13px] text-[12px] leading-[14px] qnt-normal font-[Raleway] text-[#4F4F4F]">Новостройка</p>

                        <button class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border border-[#3478f624] rounded-[5px] w-full bg-[#1da95814]">
                            <p class="text-[16px] leading-[14px] font-medium text-[#828282]">ЖК “Оганово”</p>
                            <app-i name="ic:baseline-keyboard-arrow-down" :class="['text-[#1DA958] h-5 w-5 transition-transform duration-300']" />
                        </button>
                    </div>
                </div>

                <div class="form-section mb-[23px] flex gap-[9px]">
                    <div class="flex-grow">
                        <p class="mb-[13px] text-[12px] leading-[14px] qnt-normal font-[Raleway] text-[#4F4F4F]">Срок сдачи</p>

                        <button class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border border-[#3478f624] rounded-[5px] w-full bg-[#1da95814]">
                            <p class="text-[16px] leading-[14px] font-medium text-[#828282]">Любой</p>
                            <app-i name="ic:baseline-keyboard-arrow-down" :class="['text-[#1DA958] h-5 w-5 transition-transform duration-300']" />
                        </button>
                    </div>
                    <div class="flex-grow">
                        <p class="mb-[13px] text-[12px] leading-[14px] qnt-normal font-[Raleway] text-[#4F4F4F]">Комнатность</p>

                        <button class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border border-[#3478f624] rounded-[5px] w-full bg-[#1da95814]">
                            <p class="text-[16px] leading-[14px] font-medium text-[#828282]">Любая</p>
                            <app-i name="ic:baseline-keyboard-arrow-down" :class="['text-[#1DA958] h-5 w-5 transition-transform duration-300']" />
                        </button>
                    </div>
                </div>

                <div class="form-section mb-[23px]">
                    <div class="relative">
                        <p class="mb-[13px] text-[12px] leading-[14px] font-normal font-[Raleway] text-[#4F4F4F]">Стоимость недвижимости</p>
                        <button class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border border-[#3478f624] rounded-[5px] w-full bg-[#1da95814]">
                            <ul class="text-[14px] font-medium leading-4 font-[Inter] flex items-center justify-between w-full">
                                <li>
                                    <p class="text-[#828282]">6 702 000</p>
                                </li>
                                <li>
                                    <p class="text-[#1DA958]">₽</p>
                                </li>
                            </ul>
                        </button>
                        <range-input class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto" />
                    </div>
                </div>

                <div class="form-section mb-[23px]">
                    <div class="relative">
                        <p class="mb-[13px] text-[12px] leading-[14px] font-normal font-[Raleway] text-[#4F4F4F]">Первый взнос</p>
                        <button class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border border-[#3478f624] rounded-[5px] w-full bg-[#1da95814]">
                            <ul class="text-[14px] font-medium leading-4 font-[Inter] flex items-center justify-between w-full">
                                <li>
                                    <p class="text-[#828282]">6 702 000</p>
                                </li>
                                <li>
                                    <p class="text-[#1DA958]">₽</p>
                                </li>
                            </ul>
                        </button>
                        <range-input class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto" />
                    </div>
                </div>

                <div class="form-section mb-[23px]">
                    <div class="relative">
                        <p class="mb-[13px] text-[12px] leading-[14px] font-normal font-[Raleway] text-[#4F4F4F]">Срок кредита</p>
                        <button class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border border-[#3478f624] rounded-[5px] w-full bg-[#1da95814]">
                            <ul class="text-[14px] font-medium leading-4 font-[Inter] flex items-center justify-between w-full">
                                <li>
                                    <p class="text-[#828282]">6 702 000</p>
                                </li>
                                <li>
                                    <p class="text-[#1DA958]">₽</p>
                                </li>
                            </ul>
                        </button>
                        <range-input class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto" />
                    </div>
                </div>

                <div class="form-section mb-[25px]">
                    <ul>
                        <li class="flex items-center mb-4">
                            <span class="relative mr-[15px] h-6 w-6 border-2 rounded-full flex items-center justify-center border-[#1DA958]">
                                <app-i name="ic:round-circle" class="absolute text-[#1DA958] h-[10px] w-[10px]" />
                            </span>
                            <p class="text-sm font-normal leading-5 font-[Inter]">Стандартная ипотека</p>
                        </li>

                        <li class="flex items-center mb-4">
                            <span class="relative mr-[15px] h-6 w-6 bg-[#fafcfe] border-2 border-[#1da95814] rounded-full flex items-center justify-center">
                                <app-i name="ic:round-circle" class="absolute h-[10px] w-[10px] text-[#e8e8e8]" />
                            </span>
                            <p class="text-sm font-normal leading-5 font-[Inter]">Субсидированная застройщиком</p>
                        </li>

                        <li class="flex items-center mb-[2px] md:mb-[6px]">
                            <span class="relative mr-[15px] h-6 w-6 bg-[#fafcfe] border-2 border-[#1da95814] rounded-full flex items-center justify-center">
                                <app-i name="ic:round-circle" class="absolute h-[10px] w-[10px] text-[#e8e8e8]" />
                            </span>
                            <p class="text-sm font-normal leading-5 font-[Inter]">Господдержка</p>
                        </li>
                    </ul>
                </div>
            </form>

            <template #foot>
                <dashed-devider />
            </template>
        </NuxtLayout>
    </div>
</template>

<style lang="scss" scoped>
.choices {
    header {
        width: fit-content;
    }

    button.selected {
        position: relative;
        &::after {
            content: " ";
            z-index: 1;
            background-color: #1da958;
            padding: 1px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            border-radius: 3px;
        }
    }
}
</style>
