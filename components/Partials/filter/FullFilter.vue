<script lang="ts" setup>
import RangeInput from "~/components/UI/TowThumbsRangeInput.vue";
import { OptionLayout, RangeValue } from "~/components/Partials/filter/full-Filter";
const { apartments, homes, filter } = useFilter();

const home_class_options = computed(() => homes.value?.home_class?.map(({ id, name }) => ({ value: id, label: name })));
const home_type_options = computed(() => homes.value?.home_type?.map(({ id, name }) => ({ value: id, label: name })));
const apartment_decor_options = computed(() => apartments.value?.decors?.map(({ id, name }) => ({ value: id, label: name })));
</script>

<template>
    <ul class="app-shadow mx-auto grid gap-4 grid-cols-12 py-4 pb-8 rounded-[5px] px-5 bg-white hg-6 top-0">
        <li class="col-span-4">
            <h4 class="mb-4 text-[#50535A] text-[14px] leading-4 font-extrabold font-[Raleway] h-12 uppercase flex items-center">расположение</h4>
            <ul>
                <option-layout tag="li" label="Регион"></option-layout>
                <option-layout tag="li" label="Город"></option-layout>
                <option-layout tag="li" label="Адм. район"></option-layout>
                <option-layout tag="li" label="Народный район"></option-layout>
            </ul>
        </li>

        <!-- Home -->
        <li class="col-span-4">
            <h4 class="mb-4 text-[#50535A] text-[14px] leading-4 font-extrabold font-[Raleway] h-12 uppercase flex items-center">Дом</h4>
            <ul>
                <option-layout tag="li" label="Класс недвижимости">
                    <multi-select :options="home_class_options" v-model="filter.home_class" />
                </option-layout>
                <option-layout tag="li" label="Материал стен">
                    <multi-select :options="home_type_options" v-model="filter.home_type" />
                </option-layout>
                <option-layout tag="li" label="Этажей в доме">
                    <!-- prettier-ignore -->
                    <range-value
                        :max="homes?.count_floors[1]"
                        :min="homes?.count_floors[0]"
                        v-model:to="filter.count_floors_to"
                        v-model:from="filter.count_floors_from"
                        class="flex gap-1 p-3"
                    />
                </option-layout>
                <option-layout tag="li" label="Паркинг">
                    <select-existence v-model="filter.has_parking" />
                </option-layout>
                <option-layout tag="li" label="Лифт">
                    <select-existence v-model="filter.lift" />
                </option-layout>
                <option-layout tag="li" label="Коммерция">
                    <select-existence v-model="filter.has_offices" />
                </option-layout>
            </ul>
        </li>

        <!-- Apartment -->
        <li class="col-span-4">
            <h4 class="mb-4 text-[#50535A] text-[14px] leading-4 font-extrabold font-[Raleway] h-12 uppercase flex items-center">Квартира</h4>
            <ul>
                <option-layout tag="li" label="Этаж">
                    <!-- prettier-ignore -->
                    <range-value
                        :max="homes?.count_floors[1]"
                        :min="homes?.count_floors[0]"
                        v-model:to="filter.floor_to"
                        v-model:from="filter.floor_from"
                        class="flex gap-1 p-3"
                    />
                </option-layout>
                <option-layout tag="li" label="Отделка">
                    <multi-select :options="apartment_decor_options" v-model="filter.decors" />
                </option-layout>
                <option-layout tag="li" label="Общая площадь">
                    <!-- prettier-ignore -->
                    <range-value
                        :max="apartments?.max_area_total"
                        :min="apartments?.min_area_total"
                        v-model:to="filter.area_total_to"
                        v-model:from="filter.area_total_from"
                        class="flex gap-1 p-3"
                    />
                </option-layout>
                <option-layout tag="li" label="Плозадь жилья">
                    <!-- prettier-ignore -->
                    <range-value
                        :max="apartments?.max_area_total"
                        :min="apartments?.min_area_total"
                        v-model:to="filter.area_living_to"
                        v-model:from="filter.area_living_from"
                        class="flex gap-1 p-3"
                    />
                </option-layout>
                <option-layout tag="li" label="Площадь кухни">
                    <!-- prettier-ignore -->
                    <range-value
                        :max="apartments?.max_area_total"
                        :min="apartments?.min_area_total"
                        v-model:to="filter.area_kitchen_to"
                        v-model:from="filter.area_kitchen_from"
                        class="flex gap-1 p-3"
                    />
                </option-layout>
                <option-layout tag="li" label="Санузел"> </option-layout>
            </ul>
        </li>
    </ul>
</template>
