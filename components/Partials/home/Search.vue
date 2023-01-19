<script setup lang="ts">
import { apartmentsData as getApartmentsData } from "~/services/gql/apartments";
import { homesData as getHomesData } from "~/services/gql/homes";
import { countRoomsGen } from "~/utils";
import { PRICE, MIN_TOTAL_AREA } from "~/constants";

const LazyMobileFilter = defineAsyncComponent(() => import("~/components/Partials/MobileFilter.vue"));

const [isVisible, toggleVisibility] = useMobileFilter();

const [isCollapsed, toggle] = useToggle();
const [isTypeCollapsed, toggleType] = useToggle();
const [isPriceCollapsed, togglePrice] = useToggle();
const [isSquareCollapsed, toggleSquare] = useToggle();
const [isDeadlineCollapsed, toggleDeadline] = useToggle();

const { filter } = useFilter();

// ApartmentsData
const { result } = getApartmentsData();
const apartmentsData = computed(() => result.value?.apartmentsData ?? null);

const countRooms = countRoomsGen(apartmentsData);

// Deadlines
const { result: homesResult } = getHomesData();

interface IDeadline {
    quarter_end?: Numberish;
    year_end?: Numberish;
}

const deadlines = computed<IDeadline[]>(() => homesResult.value?.homesData?.deadlines ?? []);

const deadlineToLabel = (e: IDeadline) => `до ${e?.quarter_end} кв. ${e?.year_end}`;

const deadlineOptions = computed(() => deadlines.value.map((value) => ({ label: deadlineToLabel(value), value })));
</script>

<template>
    <section :class="[$attrs.class]">
        <div class="hidden md:flex search-container mx-auto border md:border-none items-center border-[#3478f624] rounded h-[50px] px-[18px] md:px-5 bg-white mb-[6px]">
            <ul :class="['search-area flex items-center justify-between w-full flex-wrap']">
                <li :class="['search-input']">
                    <text-search v-model="filter.name" @filter="() => toggleVisibility(true)" />
                </li>

                <li class="search-options py-2">
                    <ul class="flex items-center divide-x divide-gray-300">
                        <li class="px-[27px] flex items-center relative">
                            <button @click="() => toggleType()" class="whitespace-nowrap font-bold text-[14px] leading-5 cursor-pointer text-[#50535A]">Тип квартиры</button>
                            <filter-by-rooms :is-collapsed="isTypeCollapsed" :handel-blur="() => toggleType(true)" :options="countRooms" v-model="filter.count_rooms">
                                <template #before>
                                    <label :for="`room-count_studio-0`" class="flex gap-3 px-3 py-[6px] cursor-pointer hover:bg-gray-100">
                                        <input type="checkbox" :id="`room-count_studio-0`" v-model="filter.is_studio" />
                                        <p class="text-xs">Студии</p>
                                    </label>
                                    <hr />
                                </template>
                            </filter-by-rooms>
                        </li>

                        <li class="px-[27px] flex items-center relative">
                            <button @click="() => togglePrice()" class="whitespace-nowrap font-bold text-[14px] leading-5 cursor-pointer text-[#50535A]">Цена</button>
                            <filter-from-to v-model:from="filter.price_from" v-model:to="filter.price_to" :is-collapsed="isPriceCollapsed" :handel-blur="() => togglePrice(true)" :min="PRICE.MIN" :max="PRICE.MAX" :step="PRICE.MIN" />
                        </li>

                        <li class="px-[27px] flex items-center relative">
                            <button @click="() => toggleSquare()" class="whitespace-nowrap font-bold text-[14px] leading-5 cursor-pointer text-[#50535A]">Площадь</button>
                            <filter-from-to v-model:from="filter.area_total_from" v-model:to="filter.area_total_to" :is-collapsed="isSquareCollapsed" :handel-blur="() => toggleSquare(true)" :min="MIN_TOTAL_AREA" :step="20" :max="apartmentsData?.max_area_total" />
                        </li>

                        <li class="px-[27px] flex items-center relative">
                            <button @click="() => toggleDeadline()" class="whitespace-nowrap font-bold text-[14px] leading-5 cursor-pointer text-[#50535A]">Срок аренды</button>
                            <filter-by-deadline v-model="filter.deadline" :options="deadlineOptions" :is-collapsed="isDeadlineCollapsed" :handel-blur="() => toggleDeadline(true)" />
                        </li>

                        <li class="pl-[27px] flex items-center">
                            <button class="flex items-center text-[#1DA958] cursor-pointer" @click="() => toggle()" role="expand" aria-label="expand filter">
                                <app-i name="heroicons-outline:adjustments" class="mr-2 rotate-90 transform" />
                                <p class="whitespace-nowrap font-bold text-[14px] leading-5">Все фильтры</p>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <Transition name="search-expand" :aria-expanded="isCollapsed">
            <Blurable tag="ul" @blured="() => toggle(true)" class="filter mx-auto grid gap-4 grid-cols-12 py-4 pb-8 rounded-[5px] px-5 bg-white overflow-hidden hg-6" v-if="!isCollapsed">
                <li class="col-span-4">
                    <h4 class="mb-4 text-[#50535A] text-[14px] leading-4 font-extrabold font-[Raleway] h-12 uppercase flex items-center">расположение</h4>
                    <div>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Регион</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Город</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Адм. район</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Народный район</button>
                    </div>
                </li>

                <li class="col-span-4">
                    <h4 class="mb-4 text-[#50535A] text-[14px] leading-4 font-extrabold font-[Raleway] h-12 uppercase flex items-center">Дом</h4>
                    <div>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Класс недвижимости</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Материал стен</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Этажей в доме</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Паркинг</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Лифт</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Коммерция</button>
                    </div>
                </li>

                <li class="col-span-4">
                    <h4 class="mb-4 text-[#50535A] text-[14px] leading-4 font-extrabold font-[Raleway] h-12 uppercase flex items-center">КВАРТИРА</h4>
                    <div>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Этаж</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Отделка</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Общая площадь</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Плозадь жилья</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Площадь кухни</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Санузел</button>
                    </div>
                </li>
            </Blurable>
        </Transition>

        <Teleport to="body">
            <Transition name="mobile-filter">
                <!-- prettier-ignore -->
                <lazy-mobile-filter
                    v-if="isVisible"
                    :deadlines="deadlineOptions"
                    :count-rooms="countRooms"
                    :max-total-area="apartmentsData?.max_area_total"
                    @close="() => toggleVisibility()"
                    @search="() => toggleVisibility(false)"
                    />
            </Transition>
        </Teleport>

        <!-- ****** -->
    </section>
</template>

<style lang="scss" scoped>
$w: 1160px;

.filter {
    max-width: $w;
    box-shadow: $md-box-shadow;
}

.search-container {
    max-width: $w;
    box-shadow: $box-shadow;

    .search-area {
        justify-content: center;
    }

    .search-options {
        display: none;
    }

    @include break_point(828px) {
        box-shadow: $md-box-shadow;
        height: auto;

        .search-input {
            flex-grow: 0;
            width: 37ch;
        }

        .search-options {
            display: block;
        }
    }

    @include break_point(1154px) {
        padding-left: 32px;
        padding-right: 32px;

        padding-top: 12px;
        padding-bottom: 12px;
        .search-options,
        .search-input {
            padding: 0;
        }

        .search-area {
            & > :not([hidden]) ~ :not([hidden]) {
                --tw-divide-x-reverse: 0;
                border-right-width: calc(1px * var(--tw-divide-x-reverse));
                border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
            }

            flex-wrap: nowrap;
            justify-content: space-between;

            .search-input {
                flex-grow: 1;
            }
        }
    }
}
</style>
