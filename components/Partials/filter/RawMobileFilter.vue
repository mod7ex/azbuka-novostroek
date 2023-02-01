<script setup lang="ts">
import RangeInput from "~/components/UI/TowThumbsRangeInput.vue";
import { DONE_DEADLINE } from "~/constants";

const { apartments, deadlines, count_rooms, ready, load } = useFilterData();

const { filter, reset } = useFilter();

const emit = defineEmits(["search"]);

onMounted(load);
</script>

<template>
    <div v-if="ready" class="pb-6">
        <!-- prettier-ignore -->
        <app-select
            class="mb-6"
            :options="count_rooms"
            multiple
            shrink
            flat
            v-model="filter.count_rooms"
        >
        <template #inner-label>
            <p>Тип квартиры</p>
        </template>
    </app-select>

        <!-- Price -->
        <div class="mb-6 relative">
            <labled-range-input class="bg-white">
                <template #label>
                    <p class="mb-[13px]">Задайте стоимость</p>
                </template>

                <template #min-label>
                    <p>
                        от <span class="text-[#3478F6]">{{ Math.floor((filter.price_from ?? apartments?.min_price) / 100000) / 10 }} млн ₽</span>
                    </p>
                </template>

                <template #max-label>
                    <p>
                        до <span class="text-[#3478F6]">{{ Math.floor((filter.price_to ?? apartments?.max_price) / 100000) / 10 }} млн ₽</span>
                    </p>
                </template>

                <!-- prettier-ignore -->
                <template #thums>
                    <range-input
                        :max="apartments?.max_price"
                        :min="apartments?.min_price"
                        v-model:last_range="filter.price_to"
                        v-model:first_range="filter.price_from"
                        class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto md:w-full"
                    />
                </template>
            </labled-range-input>
        </div>

        <!-- Area -->
        <!-- <div class="mb-6 relative">
            <labled-range-input class="bg-white" label="Задайте площадь">
                <template #min-label>
                    <p>
                        от <span class="text-[#3478F6]">{{ filter.area_total_from ?? apartments?.min_area_total }} м²</span>
                    </p>
                </template>

                <template #max-label>
                    <p>
                        до <span class="text-[#3478F6]">{{ filter.area_total_to ?? apartments?.max_area_total }} м²</span>
                    </p>
                </template>

                <template #thums>
                    <range-input
                        :step="1"
                        :max="apartments?.max_area_total"
                        :min="apartments?.min_area_total"
                        v-model:last_range="filter.area_total_to"
                        v-model:first_range="filter.area_total_from"
                        class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto md:w-full"
                    />
                </template>
            </labled-range-input>
        </div> -->

        <!-- prettier-ignore -->
        <!-- <app-select
            :options="[{ value: DONE_DEADLINE, label: 'Сдан' }, ...deadlines]"
            label="Выберите срок аренды"
            v-model="filter.deadline"
            inner-label="Не выбран"
            class="mb-6"
            shrink
        /> -->

        <!-- prettier-ignore -->
        <button class="mb-6 flex items-center gap-3" >
            <app-i name="akar-icons:settings-horizontal" class="text-[#3478F6] h-5 w-5" />
            <span class="font-[Inter] text-[14px] font-medium leading-4 text-[#3478F6]" >Все фильтры</span>
        </button>

        <!-- <button class="mx-auto flex items-center justify-center gap-x-[14px] mb-6" @click="reset">
            <app-i class="w-5 h-5 text-[#1DA958]" name="material-symbols:close" />
            <p class="text-[13px] leading-[13px] font-bold font-[Inter] text-[#131313]">Сбросить фильтры</p>
        </button> -->

        <!-- <Button @click="() => $emit('search')" label="Показать 852 предложения" class="bg-[#E71F61] text-white w-full" /> -->
    </div>
</template>
