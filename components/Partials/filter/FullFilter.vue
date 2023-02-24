<script lang="ts" setup>
import { OptionLayout, RangeValue } from "~/components/Partials/filter/full-Filter";
import { regions } from "~/services/gql/regions";
import { cities, city } from "~/services/gql/cities";
import { districts } from "~/services/gql/disctricts";
import { peoplesDistricts } from "~/services/gql/people-disctricts";

const { apartments, homes, filter } = useFilter();

const home_class_options = computed(() => homes.value?.home_class?.map(({ id, name }) => ({ value: id, label: name })));
const home_type_options = computed(() => homes.value?.home_type?.map(({ id, name }) => ({ value: id, label: name })));
const apartment_decor_options = computed(() => apartments.value?.decors?.map(({ id, name }) => ({ value: id, label: name })));
const bathrooms_options = computed(() => apartments.value?.bathrooms?.map(({ id, name }) => ({ value: id, label: name })));

// regions
const { result: regionResult } = regions();
const region_options = computed(() => regionResult.value?.regions?.data?.map(({ id, name }) => ({ value: id, label: name })));

// cities
const { result: citiesResult, refetch: refetchCities, load: loadCities } = cities();
const city_options = computed(() => citiesResult.value?.cities?.data?.map(({ id, name }) => ({ value: id, label: name })) ?? []);

const onRegionChange = async (region_id: number | undefined) => {
    if (region_id != null) {
        if (citiesResult.value) await refetchCities({ region_id });
        else loadCities();
        filter.value.city_id = null;
    }
};

// district
const { result: districtsResult, refetch: refetchDistricts } = districts();
const district_options = computed(() => districtsResult.value?.districts?.data?.map(({ id, name }) => ({ value: id, label: name })) ?? []);

// peoplesDistrict
const { result: peoplesDistrictResult, refetch: refetchPeoplesDistricts } = peoplesDistricts();
const people_district_options = computed(() => peoplesDistrictResult.value?.peoplesDistricts?.data?.map(({ id, name }) => ({ value: id, label: name })) ?? []);

const onCityChange = (city_id: number | undefined) => {
    if (city_id != null) {
        filter.value.district_id = null;
        filter.value.peoples_district_id = null;
        refetchDistricts({ city_id });
        refetchPeoplesDistricts({ city_id });
    }
};

watch(() => filter.value.region_id, onRegionChange, { immediate: true });
watch(() => filter.value.city_id, onCityChange, { immediate: true });
</script>

<template>
    <ul class="app-shadow mx-auto grid gap-4 grid-cols-12 py-4 pb-8 rounded-[5px] px-5 bg-white hg-6 top-0">
        <li class="col-span-4">
            <h4 class="mb-4 text-[#50535A] text-[14px] leading-4 font-extrabold font-[Raleway] h-12 uppercase flex items-center">расположение</h4>
            <ul>
                <option-layout tag="li" label="Регион">
                    <multi-select :options="region_options" v-model="filter.region_id" single reset />
                </option-layout>
                <option-layout tag="li" label="Город" :disabled="filter.region_id == null">
                    <multi-select :options="city_options" v-model="filter.city_id" single reset />
                </option-layout>
                <option-layout tag="li" label="Адм. район" :disabled="filter.city_id == null">
                    <multi-select :options="people_district_options" v-model="filter.peoples_district_id" single reset />
                </option-layout>
                <option-layout tag="li" label="Народный район" :disabled="filter.city_id == null">
                    <multi-select :options="district_options" v-model="filter.district_id" single reset />
                </option-layout>
            </ul>
        </li>

        <!-- Home -->
        <li class="col-span-4">
            <h4 class="mb-4 text-[#50535A] text-[14px] leading-4 font-extrabold font-[Raleway] h-12 uppercase flex items-center">Дом</h4>
            <ul>
                <option-layout tag="li" label="Класс недвижимости">
                    <multi-select :options="home_class_options" v-model="filter.home_class" reset />
                </option-layout>
                <option-layout tag="li" label="Материал стен">
                    <multi-select :options="home_type_options" v-model="filter.home_type" reset />
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
                    <multi-select :options="apartment_decor_options" v-model="filter.decors" reset />
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
                <option-layout tag="li" label="Санузел">
                    <multi-select :options="bathrooms_options" v-model="filter.bathrooms" reset />
                </option-layout>
            </ul>
        </li>
    </ul>
</template>
