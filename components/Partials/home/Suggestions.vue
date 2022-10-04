<script setup lang="ts">
import Building from "~/components/Partials/Building.vue";
import RangeInput from "~/components/UI/TowThumbsRangeInput.vue";

const [isCollapsed, toggle] = useToggle();
</script>

<template>
    <NuxtLayout name="app-section" class="search-result-section mb-[34px] md:mb-[85px] md:mt-[75px]">
        <template #head>
            <div class="sm:flex sm:items-center sm:justify-between flex-wrap relative z-10 mb-[18px] md:mb-[61px]">
                <p class="text-center text-[26px] md:text-[38px] md:leading-[44px] leading-9 font-bold md:font-extrabold text-[#131313] font-[Raleway] mb-4 sm:mb-0">Вам подойдет</p>

                <div class="relative filter-btn w-full">
                    <button @click="() => toggle()" class="mb-1 h-11 flex w-full items-center justify-between border-2 border-[#f8f8f8] rounded-[5px] p-4 md:px-[17px]">
                        <p class="text-[#131313] text-[13px] md:text-[14px] font-[Raleway] font-extralight md:font-light leading-4 italic">Сортировать по:</p>
                        <span class="rounded-full relative ml-2 flex items-center justify-center h-5 w-5 bg-[#1DA958]">
                            <app-i name="zondicons:cheveron-down" class="absolute text-white w-6 h-4" />
                        </span>
                    </button>

                    <Transition name="filter">
                        <div v-if="!isCollapsed" class="absolute shadow p-4 md:p-[17px] bg-red-600 left-0 right-0 rounded-b-[5px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, architecto nemo, corrupti eveniet fugiat officia dignissimos eaque id minima ab eum exercitationem quo. Quisquam at architecto, fuga ullam ipsa omnis.
                        </div>
                    </Transition>
                </div>
            </div>
        </template>

        <!-- Filter Mobile -->

        <div class="my-3 py-3 border-t-2 border-b-2 border-black max-w-[335px] mx-auto">
            <button class="mb-10 flex justify-center font-[Raleway] items-center gap-x-[14px] py-[15px] border-2 border-[#f8f8f8] rounded-[5px] w-full">
                <app-i name="carbon:settings-adjust" class="text-[#1DA958] h-5 w-5" />
                <p class="text-[13px] leading-[13px] font-bold text-[#131313]">Показать фильтры</p>
            </button>

            <div class="py-[22px]">
                <header class="flex items-center justify-between mb-[34px]">
                    <button class="flex justify-center font-[Raleway] items-center gap-x-[10px]">
                        <span class="rounded-full relative flex items-center justify-center h-5 w-5 bg-[#1DA958]">
                            <app-i name="heroicons-solid:chevron-left" class="text-white absolute" />
                        </span>
                        <p class="text-[13px] leading-[15px] italic font-extralight text-[#131313]">Назад</p>
                    </button>

                    <p class="leading-9 text-[26px] font-bold font-[Raleway]">Фильтры</p>

                    <button class="cursor-pointer">
                        <app-i class="w-6 h-6 text-[#BDBDBD]" name="material-symbols:close" />
                    </button>
                </header>

                <div class="flex items-center justify-center gap-x-4 border-2 border-[#f8f8f8] rounded-[5px] py-4 px-3">
                    <app-i name="heroicons-outline:search" class="text-[#1DA958] w-[17px] h-[17px] cursor-pointer" />
                    <input type="text" placeholder="Название новостройки или застройщика" class="flex-grow" />
                </div>
            </div>

            <div class="mb-6">
                <p class="mb-[13px] text-[12px] leading-[14px] font-normal font-[Raleway] text-[#4F4F4F]">Выберите тип квартиры</p>
                <button class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border-2 border-[#f8f8f8] rounded-[5px] w-full">
                    <p class="text-[16px] leading-[14px] font-medium text-[#4F4F4F]">Тип квартиры</p>
                    <app-i name="ic:baseline-keyboard-arrow-down" class="text-[#3478F6] h-5 w-5" />
                </button>
            </div>

            <div class="mb-6 relative">
                <p class="mb-[13px] text-[12px] leading-[14px] font-normal font-[Raleway] text-[#4F4F4F]">Задайте стоимость</p>
                <button class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border-2 border-[#f8f8f8] rounded-[5px] w-full">
                    <ol class="text-[#4F4F4F] text-[14px] font-medium leading-4 font-[Inter] flex items-center justify-between w-full">
                        <li>
                            <p>от <span class="text-[#3478F6]">3.9 млн ₽</span></p>
                        </li>
                        <li>
                            <p>до <span class="text-[#3478F6]">43.9 млн ₽</span></p>
                        </li>
                    </ol>
                </button>
                <range-input class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto" />
            </div>

            <div class="mb-6 relative">
                <p class="mb-[13px] text-[12px] leading-[14px] font-normal font-[Raleway] text-[#4F4F4F]">Задайте площадь</p>
                <button class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border-2 border-[#f8f8f8] rounded-[5px] w-full">
                    <ol class="text-[#4F4F4F] text-[14px] font-medium leading-4 font-[Inter] flex items-center justify-between w-full">
                        <li>
                            <p>от <span class="text-[#3478F6]">58 м²</span></p>
                        </li>
                        <li>
                            <p>до <span class="text-[#3478F6]">87 м²</span></p>
                        </li>
                    </ol>
                </button>
                <range-input class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto" />
            </div>

            <div class="mb-6">
                <p class="mb-[13px] text-[12px] leading-[14px] font-normal font-[Raleway] text-[#4F4F4F]">Выберите срок аренды</p>
                <button class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border-2 border-[#f8f8f8] rounded-[5px] w-full">
                    <p class="text-[16px] leading-[14px] font-medium text-[#4F4F4F]">12 месяцев</p>
                    <app-i name="ic:baseline-keyboard-arrow-down" class="text-[#3478F6] h-5 w-5" />
                </button>
            </div>

            <button class="mx-auto flex items-center justify-center gap-x-[14px] mb-6">
                <app-i class="w-5 h-5 text-[#1DA958]" name="material-symbols:close" />
                <p class="text-[13px] leading-[13px] font-bold font-[Inter] text-[#131313]">Сбросить фильтры</p>
            </button>

            <Button label="Показать 852 предложения" class="bg-[#E71F61] text-white w-full" />
        </div>
        <!-- ****** -->

        <div class="buildings grid grid-cols-12 gap-3 md:gap-[30px] mb-[28px] md:mb-[61px]">
            <!-- 26 + 2 = 28 -->
            <Building v-for="i in 8" :key="i" />
        </div>

        <template #foot>
            <div class="flex justify-center">
                <Button label="Загрузить еще" class="mx-auto block md:inline bg-[#E71F61]" />
            </div>
        </template>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
.search-result-section {
    .filter-btn {
        @include break_point(640px) {
            max-width: 262px;
        }

        .filter-enter-active,
        .filter-leave-active {
            transition: opacity 0.5s ease;
        }

        .filter-enter-from,
        .filter-leave-to {
            opacity: 0;
        }
    }
}

input::placeholder {
    font-family: Raleway;
    font-size: 13px;
    font-style: italic;
    font-weight: 300;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
}

.range-selector {
    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: #3071a9;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }

    &:focus::-webkit-slider-runnable-track {
        background: #367ebd;
    }

    &::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: #3071a9;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }

    &::-ms-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        border-width: 16px 0;
        color: transparent;
    }
    &::-ms-fill-lower {
        background: #2a6495;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    &:focus::-ms-fill-lower {
        background: #3071a9;
    }
    &::-ms-fill-upper {
        background: #3071a9;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    &:focus::-ms-fill-upper {
        background: #367ebd;
    }
}
</style>
