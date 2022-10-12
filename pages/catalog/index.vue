<script setup lang="ts">
import TheBreadCrumb from "~/components/TheBreadCrumb.vue";
import BuildingCard from "~/components/Partials/catalog/Card.vue";
import BuildingDescription from "~/components/Partials/catalog/Description.vue";
import BuildingLocation from "~/components/Partials/catalog/Location.vue";

const choices = ["1 - Дом  (1 кв. 2022)", "2 - Дом  (2 кв. 2022)", "3 - Дом  (2 кв. 2022)", "4 - Дом  (2 кв. 2022)", "5 - Дом  (2 кв. 2022)", "6 - Дом  (2 кв. 2022)"];
</script>

<template>
    <div>
        <NuxtLayout name="inner">
            <app-width class="mt-7">
                <TheBreadCrumb class="mb-[19px]" />
                <building-card class="mb-[33px]" />
                <building-description class="mb-[25px]" />
                <building-location class="mb-[25px]" />
                <!--  -->

                <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0']">
                    <template #head>
                        <h1 class="text-[26px] font-bold leading-9 font-[Raleway] text-[#131313]">Выбор дома</h1>
                    </template>

                    <ul class="mt-[22px] mb-8 grid grid-cols-2 gap-[10px]">
                        <li v-for="(choice, i) in choices" :key="i" class="col-span-1 w-full">
                            <button :class="['py-2 w-full rounded-[3px] px-[18px] font-medium text-[13px] leading-[15px]', i == 0 ? 'bg-[#1DA958] text-white' : 'bg-[#D2EEDE]']">{{ choice }}</button>
                        </li>
                    </ul>

                    <div class="choices mb-[21px] overflow-x-scroll">
                        <header class="flex gap-y-[30px] border-b-[2px] border-dotted">
                            <button :class="['pb-[13px] whitespace-nowrap text-[15px] font-normal leading-[18px] font-[Inter]']">Характеристики</button>
                            <button :class="['pb-[13px] text-[#878787] whitespace-nowrap text-[15px] font-normal leading-[18px] font-[Inter] mx-[30px]']">Документы</button>
                            <button :class="['pb-[13px] text-[#878787] whitespace-nowrap text-[15px] font-normal leading-[18px] font-[Inter]']">Ход строительства</button>
                        </header>
                    </div>

                    <div class="mb-[28px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis, natus consequatur minima fuga harum reprehenderit, incidunt voluptatum veniam perspiciatis labore ad esse eveniet? Voluptatibus veritatis repellat eveniet nam eius!</div>

                    <template #foot> <dashed-devider /> </template>
                </NuxtLayout>
            </app-width>
        </NuxtLayout>
    </div>
</template>

<style lang="scss" scoped>
.choices {
    &::-webkit-scrollbar {
        display: none;
    }

    header {
        width: fit-content;
    }

    button:first-of-type {
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
