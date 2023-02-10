<script lang="ts" setup>
import RangeInput from "~/components/UI/TowThumbsRangeInput.vue";
import { OptionLayout, RangeValue } from "~/components/Partials/filter/full-Filter";
const { apartments, homes, filter } = useFilter();

const home_class_options = computed(() => homes.value?.home_class?.map(({ id, name }) => ({ value: id, label: name })));
const home_type_options = computed(() => homes.value?.home_type?.map(({ id, name }) => ({ value: id, label: name })));
</script>

<template>
    <ul class="app-shadow mx-auto grid gap-4 grid-cols-12 py-4 pb-8 rounded-[5px] px-5 bg-white overflow-hidden hg-6 top-0">
        <li class="col-span-4">
            <h4 class="mb-4 text-[#50535A] text-[14px] leading-4 font-extrabold font-[Raleway] h-12 uppercase flex items-center">расположение</h4>
            <div>
                <option-layout label="Регион"></option-layout>
                <option-layout label="Город"></option-layout>
                <option-layout label="Адм. район"></option-layout>
                <option-layout label="Народный район"></option-layout>
            </div>
        </li>

        <li class="col-span-4">
            <h4 class="mb-4 text-[#50535A] text-[14px] leading-4 font-extrabold font-[Raleway] h-12 uppercase flex items-center">Дом</h4>
            <div>
                <option-layout label="Класс недвижимости">
                    <multi-select :options="home_class_options" v-model="filter.home_class" />
                </option-layout>

                <option-layout label="Материал стен">
                    <multi-select :options="home_type_options" v-model="filter.home_type" />
                </option-layout>

                <option-layout label="Этажей в доме">
                    <!-- prettier-ignore -->
                    <range-value
                        :max="homes?.count_floors[1]"
                        :min="homes?.count_floors[0]"
                        :step="1"
                        v-model:to="filter.count_floors_to"
                        v-model:from="filter.count_floors_from"
                        class="flex gap-1 p-3"
                    />
                </option-layout>
                <option-layout label="Паркинг"> </option-layout>
                <option-layout label="Лифт"> </option-layout>
                <option-layout label="Коммерция"> </option-layout>
            </div>
        </li>

        <li class="col-span-4">
            <h4 class="mb-4 text-[#50535A] text-[14px] leading-4 font-extrabold font-[Raleway] h-12 uppercase flex items-center">Квартира</h4>
            <div>
                <option-layout label="Этаж"> </option-layout>
                <option-layout label="Отделка"> </option-layout>
                <option-layout label="Общая площадь"> </option-layout>
                <option-layout label="Плозадь жилья"> </option-layout>
                <option-layout label="Площадь кухни"> </option-layout>
                <option-layout label="Санузел"> </option-layout>
            </div>
        </li>
    </ul>
</template>
