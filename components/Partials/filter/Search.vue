<script setup lang="ts">
enum CURRENT {
    All,
    Type,
    Price,
    Area,
    Deadline,
}

const state = shallowRef<CURRENT>();

const setState = (v: CURRENT) => {
    state.value = v;
};

const clearState = () => {
    state.value = undefined;
};

// const isCollapsed = computed(() => state.value !== CURRENT.All);
const isTypeCollapsed = computed(() => state.value !== CURRENT.Type);
const isPriceCollapsed = computed(() => state.value !== CURRENT.Price);
const isAreaCollapsed = computed(() => state.value !== CURRENT.Area);
const isDeadlineCollapsed = computed(() => state.value !== CURRENT.Deadline);

// prettier-ignore
const {
    reset,
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
    ping,
    load,
} = useFilter();

onMounted(load);
</script>

<template>
    <app-width tag="section" :class="[$attrs.class, 'max-w-[1199px] search z-1 relative mb-[31px] px-5 md:px-0']">
        <div class="hidden md:flex search-container mx-auto border md:border-none items-center border-[#3478f624] rounded h-[50px] px-[18px] md:px-5 bg-white mb-[6px]">
            <ul :class="['search-area flex items-center justify-between w-full flex-wrap']">
                <li :class="['search-input']">
                    <text-search v-model="filter.name" @search="() => ping()" />
                </li>

                <li class="search-options py-2">
                    <ul class="flex items-center divide-x divide-gray-300">
                        <li class="px-[27px] flex items-center relative">
                            <button @click="() => setState(CURRENT.Type)" class="whitespace-nowrap font-bold text-[14px] leading-5 cursor-pointer text-[#50535A]">Тип квартиры</button>
                            <!-- prettier-ignore -->
                            <filter-by-rooms
                                :is-collapsed="isTypeCollapsed"
                                :handel-blur="clearState"
                                :options="count_rooms"
                                v-model="filter.count_rooms"
                            >
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
                            <button @click="() => setState(CURRENT.Price)" class="whitespace-nowrap font-bold text-[14px] leading-5 cursor-pointer text-[#50535A]">Цена</button>
                            <!-- prettier-ignore -->
                            <filter-from-to
                                v-model:from="filter.price_from"
                                v-model:to="filter.price_to"
                                :is-collapsed="isPriceCollapsed"
                                :handel-blur="clearState"
                                :min="apartments?.min_price"
                                :max="apartments?.max_price"
                                :step="500000"
                            />
                        </li>

                        <li class="px-[27px] flex items-center relative">
                            <button @click="() => setState(CURRENT.Area)" class="whitespace-nowrap font-bold text-[14px] leading-5 cursor-pointer text-[#50535A]">Площадь</button>
                            <!-- prettier-ignore -->
                            <filter-from-to
                                v-model:from="filter.area_total_from"
                                v-model:to="filter.area_total_to"
                                :is-collapsed="isAreaCollapsed"
                                :handel-blur="clearState"
                                :min="apartments?.min_area_total"
                                :max="apartments?.max_area_total"
                                :step="20"
                            />
                        </li>

                        <li class="px-[27px] flex items-center relative">
                            <button @click="() => setState(CURRENT.Deadline)" class="whitespace-nowrap font-bold text-[14px] leading-5 cursor-pointer text-[#50535A]">Срок аренды</button>
                            <!-- prettier-ignore -->
                            <filter-by-deadline
                                v-model="filter.deadline"
                                :options="deadlines"
                                :is-collapsed="isDeadlineCollapsed"
                                :handel-blur="clearState"
                            />
                        </li>

                        <li class="pl-[27px] flex items-center">
                            <button class="flex items-center text-[#1DA958] cursor-pointer" @click="() => setState(CURRENT.All)" role="expand" aria-label="expand filter">
                                <app-i name="heroicons-outline:adjustments" class="mr-2 rotate-90 transform" />
                                <p class="whitespace-nowrap font-bold text-[14px] leading-5">Все фильтры</p>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="flex justify-between items-start px-5 my-3">
            <ul v-if="rooms_bullets.length || price_bullet || area_bullet || deadline_bullet" class="flex items-center flex-wrap gap-2">
                <li v-for="{ label, value } in rooms_bullets" :key="value" class="bg-[#3478F6] rounded-md py-[3px] px-2">
                    <span class="text-white mr-2 text-[13px] font-semibold leading-[14px] font-[Inter]">{{ label }}</span>
                    <button @click="() => unpickRoomCount(value)">
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

                <li class="bg-[#3478F6] rounded-md py-[3px] px-2">
                    <button @click="() => reset()">
                        <span class="text-white mr-2 text-[13px] font-semibold leading-[14px] font-[Inter]">Сбросить фильтр</span>
                    </button>
                </li>
            </ul>

            <span></span>

            <div>
                <button @click="() => ping()" class="bg-[#3478F6] text-white w-full whitespace-nowrap py-2 px-3 rounded">Показать 852 предложения</button>
            </div>
        </div>

        <!-- prettier-ignore -->
        <!--
            <filter-wrapper
                tag="ul"
                :is-collapsed="!isCollapsed"
                :handel-blur="clearState"
                class="filter mx-auto grid gap-4 grid-cols-12 py-4 pb-8 rounded-[5px] px-5 bg-white overflow-hidden hg-6 top-0"
            >
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
            </filter-wrapper>
        -->
    </app-width>
</template>

<style lang="scss" scoped>
$w: 1160px;

.search {
    margin-top: -25px;

    @include break_point(768px) {
        margin-top: -38px;
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
}
</style>
