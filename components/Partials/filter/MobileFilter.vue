<script setup lang="ts">
import { client } from "process";
import RawMobileFilter from "~/components/Partials/filter/RawMobileFilter.vue";

const { apartments, deadlines, count_rooms, ready, load } = useFilterData();

onMounted(load);

const [isCollapsed, toggle] = useToggle();
const [isFilterCollapsed, toggleFilter] = useToggle();

const { filter, reset, ping, dirty } = useFilter();

const check = () => {
    if (process.client) {
        // @ts-ignore
        return document.activeElement.tagName !== "INPUT" || document.activeElement.type !== "search";
    }

    return true;
};
</script>

<template>
    <app-width class="md:hidden relative">
        <div class="relative">
            <div :class="['bg-white transition-all duration-150 p-1 border', isFilterCollapsed ? 'rounded border-transparent' : 'shadow border-gray-200 border-b-transparent rounded-t']">
                <div class="shadow border border-[#3478f624] rounded">
                    <!-- prettier-ignore -->
                    <text-search
                        @search="() => ping()"
                        v-model="filter.name"
                        :class="['max-w-md mx-auto px-[18px] h-[50px]']"
                        @filter="() => toggleFilter()"
                    />
                </div>
            </div>

            <!-- prettier-ignore -->
            <filter-wrapper
                :handel-blur="() => toggleFilter(true)"
                :is-collapsed="isFilterCollapsed"
                class="shadow absolute bg-white left-0 right-0 p-1 rounded-b border border-gray-200 border-t-0"
                :condition="check"
            >
                <!-- prettier-ignore -->
                <div :class="['shadow border border-[#3478f624] rounded']" >
                    <raw-mobile-filter
                        v-if="ready"
                        class="z-50 px-[18px] pb-2"
                        :count_rooms="count_rooms"
                        :deadlines="deadlines"
                        :apartments="apartments"
                    >
                        <template #all-filters>
                            <button class="mt-1 flex items-center gap-3" @click="() => toggle()" >
                                <app-i v-if="!isCollapsed" name="material-symbols:close" class="w-5 h-5 text-[#3478F6]" />
                                <app-i v-else name="akar-icons:settings-horizontal" class="text-[#3478F6] h-5 w-5" />
                                
                                <span class="font-[Inter] text-[14px] font-medium leading-4 text-[#3478F6]" >
                                    {{ !isCollapsed ? 'Скрыть все фильтры' : 'Все фильтры' }}
                                </span>
                            </button>
                        </template>
                    </raw-mobile-filter>
                </div>

                <!-- full filter -->
                <!-- prettier-ignore -->
                <filter-wrapper
                    transition="shrink"
                    :handel-blur="() => toggle(true)"
                    :is-collapsed="isCollapsed"
                    :class="[
                        `hg-${16}`,
                        'app-shadow border border-[#3478f624] rounded p-[18px]',
                        ready ? 'mt-4' : ''
                    ]"
                >
                    <div class="mb-[18px] text-[#4F4F4F]">
                        <button class="mb-2 font-[Raleway] text-[13px] leading-[15px] italic font-light">Расположение</button>

                        <ul class="font-[Inter] font-medium text-[14px] leading-4 flex flex-col gap-[14px]">
                            <li><button>Регион</button></li>
                            <li><button>Город</button></li>
                            <li><button>Адм. район</button></li>
                            <li><button>Народный район</button></li>
                        </ul>
                    </div>

                    <div class="mb-[18px] text-[#4F4F4F]">
                        <button class="mb-2 font-[Raleway] text-[13px] leading-[15px] italic font-light">Дом</button>

                        <ul class="font-[Inter] font-medium text-[14px] leading-4 flex flex-col gap-[14px]">
                            <li><button>Класс недвижимости</button></li>
                            <li><button>Материал стен</button></li>
                            <li><button>Этажей в доме</button></li>
                            <li><button>Паркинг</button></li>
                            <li><button>Лифт</button></li>
                            <li><button>Коммерция</button></li>
                        </ul>
                    </div>

                    <div class="text-[#4F4F4F]">
                        <button class="mb-2 font-[Raleway] text-[13px] leading-[15px] italic font-light">Квартира</button>

                        <ul class="font-[Inter] font-medium text-[14px] leading-4 flex flex-col gap-[14px]">
                            <li><button>Этаж</button></li>
                            <li><button>Отделка</button></li>
                            <li><button>Общая площадь</button></li>
                            <li><button>Площадь жилья</button></li>
                            <li><button>Площадь кухни</button></li>
                            <li><button>Санузел</button></li>
                        </ul>
                    </div>
                </filter-wrapper>

                <div v-if="dirty" >
                    <button class="my-6  mx-auto flex items-center justify-center gap-x-[14px]" @click="reset">
                        <app-i class="w-5 h-5 text-[#1DA958]" name="material-symbols:close" />
                        <p class="text-[13px] leading-[13px] font-bold font-[Inter] text-[#131313]">Сбросить фильтры</p>
                    </button>

                    <Button @click="() => $emit('search')" label="Показать 852 предложения" class="bg-[#E71F61] text-white w-full" />
                </div>
            </filter-wrapper>
        </div>
    </app-width>
</template>
