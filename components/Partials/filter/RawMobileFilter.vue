<script setup lang="ts">
import RangeInput from "~/components/UI/TowThumbsRangeInput.vue";
import { DONE_DEADLINE } from "~/constants";

const [isAreaCollapsed, toggleArea] = useToggle();

const [isPriceCollapsed, togglePrice] = useToggle();

// prettier-ignore
const {
    filter,
    rooms_bullets,
    unpickRoomCount,
    price_bullet,
    resetPrice,
    deadline_bullet,
    resetDeadline,
    area_bullet,
    resetArea,
    apartments,
    count_rooms,
    deadlines,
} = useFilter();
</script>

<template>
    <div class="pb-6">
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
                transition="shrink"
                :is-collapsed="isPriceCollapsed"
                :handel-blur="() => togglePrice(true)"
                class="relative shadow-none mt-[13px] hg-1"
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
                transition="shrink"
                :is-collapsed="isAreaCollapsed"
                :handel-blur="() => toggleArea(true)"
                class="relative shadow-none mt-[13px] hg-1"
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
                <button @click.stop="() => unpickRoomCount(value)">
                    <app-i class="w-4 h-4 text-white" name="material-symbols:close" />
                </button>
            </li>

            <li v-if="price_bullet" class="bg-[#3478F6] rounded-md py-[3px] px-2">
                <span class="text-white mr-2 text-[13px] font-semibold leading-[14px] font-[Inter]">{{ price_bullet }}</span>
                <button @click.stop="resetPrice">
                    <app-i class="w-4 h-4 text-white" name="material-symbols:close" />
                </button>
            </li>

            <li v-if="area_bullet" class="bg-[#3478F6] rounded-md py-[3px] px-2">
                <span class="text-white mr-2 text-[13px] font-semibold leading-[14px] font-[Inter]">{{ area_bullet }}</span>
                <button @click.stop="resetArea">
                    <app-i class="w-4 h-4 text-white" name="material-symbols:close" />
                </button>
            </li>

            <li v-if="deadline_bullet" class="bg-[#3478F6] rounded-md py-[3px] px-2">
                <span class="text-white mr-2 text-[13px] font-semibold leading-[14px] font-[Inter]">{{ deadline_bullet }}</span>
                <button @click.stop="resetDeadline">
                    <app-i class="w-4 h-4 text-white" name="material-symbols:close" />
                </button>
            </li>
        </ul>

        <slot name="all-filters"></slot>
    </div>
</template>
