<script lang="ts" setup>
import { regions } from "~/services/gql/regions";
import { cities } from "~/services/gql/cities";
import { districts } from "~/services/gql/disctricts";
import { peoplesDistricts } from "~/services/gql/people-disctricts";

const { filter } = useFilter();

// regions
const { result: regionResult } = regions();
const region_options = computed(() => regionResult.value?.regions?.data?.map(({ id, name }) => ({ value: id, label: name })));

// cities
const { result: citiesResult, refetch: refetchCities } = cities();
const city_options = computed(() => citiesResult.value?.cities?.data?.map(({ id, name }) => ({ value: id, label: name })) ?? []);

const onRegionChange = async (region_id: number | undefined) => {
    if (region_id != null) {
        await refetchCities({ region_id });
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

watch(() => filter.value.region_id, onRegionChange);
watch(() => filter.value.city_id, onCityChange);
</script>

<template>
    <!-- prettier-ignore -->
    <slot
        :region_options="region_options"
        :city_options="city_options"
        :district_options="district_options"
        :people_district_options="people_district_options"
    >
    </slot>
</template>
