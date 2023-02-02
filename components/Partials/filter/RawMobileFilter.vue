<script setup lang="ts">
import RangeInput from "~/components/UI/TowThumbsRangeInput.vue";
import { DONE_DEADLINE } from "~/constants";
import { deadlineToLabel } from "~/utils";

defineProps<{ isFullFilterOpen?: boolean }>();

const [isAreaCollapsed, toggleArea] = useToggle();

const [isPriceCollapsed, togglePrice] = useToggle();

const { apartments, deadlines, count_rooms, ready, load } = useFilterData();

const { filter } = useFilter();

const emit = defineEmits(["full-filter"]);

onMounted(load);

// Rooms Count
const rooms_bullets = computed(() => filter.value.count_rooms.map((value) => ({ value, label: `${value} комн.` })));
const unpickRoomCOunt = (v: Numberish) => {
    filter.value.count_rooms = filter.value.count_rooms.filter((_v) => _v != v);
};

// Price
const price_bullet = computed(() => {
    const { price_from, price_to } = filter.value;

    if (!price_from && !price_to) return undefined;

    const _from = Math.floor((price_from ?? apartments.value?.min_price) / 100000) / 10;
    const _to = Math.floor((price_to ?? apartments.value?.max_price) / 100000) / 10;

    return `Цена от ${_from} до ${_to}`;
});
const resetPrice = () => {
    filter.value.price_from = undefined;
    filter.value.price_to = undefined;
};

// Deadline

const deadline_bullet = computed(() => {
    const { deadline } = filter.value;

    if (!deadline) return undefined;

    return deadlineToLabel(deadline);
});
const resetDeadline = () => {
    filter.value.deadline = undefined;
};

// Area
const area_bullet = computed(() => {
    const { area_total_to, area_total_from } = filter.value;

    if (!area_total_to && !area_total_from) return undefined;

    const _from = Math.floor(area_total_from ?? apartments.value?.min_area_total);
    const _to = Math.floor(area_total_to ?? apartments.value?.max_area_total);

    return `Площадь от ${_from} до ${_to}`;
});
const resetArea = () => {
    filter.value.area_total_to = undefined;
    filter.value.area_total_from = undefined;
};
</script>

<template>
    <div v-if="ready" class="pb-6">
        <!-- prettier-ignore -->
        <app-select
            :options="count_rooms"
            multiple
            shrink
            flat
            v-model="filter.count_rooms"
        >
            <template #inner-label>
                <p class="font-[Inter] text-[14px] leading-4 font-medium text-[#4F4F4F]">Тип квартиры</p>
            </template>
        </app-select>

        <!-- Price -->
        <div class="relative bg-white mb-3">
            <button @click="() => togglePrice()" class="font-[Inter] text-[14px] leading-4 font-medium text-[#4F4F4F]">Стоимость</button>

            <!-- prettier-ignore -->
            <filter-wrapper
                :is-collapsed="isPriceCollapsed"
                :handel-blur="() => togglePrice(true)"
                class="relative shadow-none mt-[13px]"
            >
                <div class="flex items-center justify-between mb-4">
                    <p>
                        от <span class="text-[#3478F6]">{{ Math.floor((filter.price_from ?? apartments?.min_price) / 100000) / 10 }} млн ₽</span>
                    </p>

                    <p>
                        до <span class="text-[#3478F6]">{{ Math.floor((filter.price_to ?? apartments?.max_price) / 100000) / 10 }} млн ₽</span>
                    </p>
                </div>

                <!-- prettier-ignore -->
                <range-input
                    :max="apartments?.max_price"
                    :min="apartments?.min_price"
                    v-model:last_range="filter.price_to"
                    v-model:first_range="filter.price_from"
                />
            </filter-wrapper>
        </div>

        <!-- Area -->
        <div class="relative bg-white">
            <button @click="() => toggleArea()" class="font-[Inter] text-[14px] leading-4 font-medium text-[#4F4F4F]">Площадь</button>

            <!-- prettier-ignore -->
            <filter-wrapper
                :is-collapsed="isAreaCollapsed"
                :handel-blur="() => toggleArea(true)"
                class="relative shadow-none mt-[13px]"
            >
                <div class="flex items-center justify-between mb-4">
                    <p>
                        от <span class="text-[#3478F6]">{{ filter.area_total_from ?? apartments?.min_area_total }} м²</span>
                    </p>
                    <p>
                        до <span class="text-[#3478F6]">{{ filter.area_total_to ?? apartments?.max_area_total }} м²</span>
                    </p>
                </div>

                <!-- prettier-ignore -->
                <range-input
                    :step="1"
                    :max="apartments?.max_area_total"
                    :min="apartments?.min_area_total"
                    v-model:last_range="filter.area_total_to"
                    v-model:first_range="filter.area_total_from"
                />
            </filter-wrapper>
        </div>

        <!-- prettier-ignore -->
        <app-select
            :options="[{ value: DONE_DEADLINE, label: 'Сдан' }, ...deadlines]"
            v-model="filter.deadline"
            shrink
            flat
        >
            <template #inner-label>
                <p class="font-[Inter] text-[14px] leading-4 font-medium text-[#4F4F4F]">Срок сдачи</p>
            </template>
        </app-select>

        <ul v-if="rooms_bullets.length || price_bullet || area_bullet || deadline_bullet" class="flex items-center flex-wrap gap-2 mb-3">
            <li v-for="{ label, value } in rooms_bullets" :key="value" class="bg-[#3478F6] rounded-md py-[3px] px-2">
                <span class="text-white mr-2 text-[13px] font-semibold leading-[14px] font-[Inter]">{{ label }}</span>
                <button @click="() => unpickRoomCOunt(value)">
                    <app-i class="w-4 h-4 text-white" name="material-symbols:close" />
                </button>
            </li>

            <li v-if="price_bullet" class="bg-[#3478F6] rounded-md py-[3px] px-2">
                <span class="text-white mr-2 text-[13px] font-semibold leading-[14px] font-[Inter]">{{ price_bullet }}</span>
                <button @click="resetPrice">
                    <app-i class="w-4 h-4 text-white" name="material-symbols:close" />
                </button>
            </li>

            <li v-if="area_bullet" class="bg-[#3478F6] rounded-md py-[3px] px-2">
                <span class="text-white mr-2 text-[13px] font-semibold leading-[14px] font-[Inter]">{{ area_bullet }}</span>
                <button @click="resetArea">
                    <app-i class="w-4 h-4 text-white" name="material-symbols:close" />
                </button>
            </li>

            <li v-if="deadline_bullet" class="bg-[#3478F6] rounded-md py-[3px] px-2">
                <span class="text-white mr-2 text-[13px] font-semibold leading-[14px] font-[Inter]">{{ deadline_bullet }}</span>
                <button @click="resetDeadline">
                    <app-i class="w-4 h-4 text-white" name="material-symbols:close" />
                </button>
            </li>
        </ul>

        <!-- prettier-ignore -->
        <button class="mt-1 flex items-center gap-3" @click="() => $emit('full-filter')" >
            <app-i v-if="isFullFilterOpen" name="material-symbols:close" class="w-5 h-5 text-[#3478F6]" />
            <app-i v-else name="akar-icons:settings-horizontal" class="text-[#3478F6] h-5 w-5" />
            
            <span class="font-[Inter] text-[14px] font-medium leading-4 text-[#3478F6]" >
                {{ isFullFilterOpen ? 'Скрыть все фильтры' : 'Все фильтры' }}
            </span>
        </button>
    </div>
</template>
