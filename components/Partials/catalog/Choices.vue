<script setup lang="ts">
const choices = ["1 - Дом  (1 кв. 2022)", "2 - Дом  (2 кв. 2022)", "3 - Дом  (2 кв. 2022)", "4 - Дом  (2 кв. 2022)", "5 - Дом  (2 кв. 2022)", "6 - Дом  (2 кв. 2022)"];

const current = shallowRef(0);
</script>

<template>
    <div>
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0']">
            <template #head>
                <h1 class="text-[26px] font-bold leading-9 font-[Raleway] text-[#131313]">Выбор дома</h1>
            </template>

            <ul class="mt-[22px] mb-8 grid grid-cols-2 gap-[10px]">
                <li v-for="(choice, i) in choices" :key="i" class="col-span-1 w-full">
                    <button :class="['py-2 w-full rounded-[3px] px-[18px] font-medium text-[13px] leading-[15px]', i == 0 ? 'bg-[#1DA958] text-white' : 'bg-[#D2EEDE]']">{{ choice }}</button>
                </li>
            </ul>

            <div class="choices no-scroll-thum mb-[21px] overflow-x-scroll">
                <header class="flex gap-y-[30px] border-b-[2px] border-dotted">
                    <button
                        @click="
                            () => {
                                current = 0;
                            }
                        "
                        :class="[current === 0 ? 'selected' : '', 'pb-[13px] whitespace-nowrap text-[15px] font-normal leading-[18px] font-[Inter]']"
                    >
                        Характеристики
                    </button>
                    <button
                        @click="
                            () => {
                                current = 1;
                            }
                        "
                        :class="[current === 1 ? 'selected' : '', 'pb-[13px] text-[#878787] whitespace-nowrap text-[15px] font-normal leading-[18px] font-[Inter] mx-[30px]']"
                    >
                        Документы
                    </button>
                    <button
                        @click="
                            () => {
                                current = 2;
                            }
                        "
                        :class="[current === 2 ? 'selected' : '', 'pb-[13px] text-[#878787] whitespace-nowrap text-[15px] font-normal leading-[18px] font-[Inter]']"
                    >
                        Ход строительства
                    </button>
                </header>
            </div>

            <div class="mb-[28px]">
                <ul>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Застройщик</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">ОOО “Застройщик”</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Город</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">Ростов-на-Дону</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Район</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">Северный</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Адрес</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">Евдокимова 25б</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Этап строительства</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">Отделка</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Срок здачи</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">4 квартал 2021 года</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Класс дома</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">Комфорт</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Технология строительства</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">есть</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Этажность</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">есть</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Высота потолков</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">да</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Пассажирский лифт</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">подземная</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Грузовой лифт</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">бизнес</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Закрытая территория</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">4.5</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Наземный паркинг</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">4.5</p>
                    </li>
                </ul>
            </div>

            <template #foot> <dashed-devider /> </template>
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
