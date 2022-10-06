<script setup lang="ts">
import RangeInput from "~/components/UI/TowThumbsRangeInput.vue";
import { uuidGen } from "~/utils";

withDefaults(defineProps<{ open: boolean }>(), {
    open: false,
});

defineEmits(["close"]);

const [apartmentTypeRef, toggleApartmentTypeRef] = useToggle(false);

const uuid = uuidGen("mobile-filter");

const apartmentTypes = ["1 комн.", "2 комн.", "3 комн.", "4 комн.", "5 комн.", "6 комн.", "Студия"];

const IDS = Array.from(Array(apartmentTypes.length).keys()).map(() => uuid());

const selectedTypesIndexes = reactive({});

const unpick = (v: number) => {
    delete selectedTypesIndexes[v];
};

const selectedTypesLables = computed(() => {
    return Object.entries(selectedTypesIndexes)
        .filter(([i, v]) => v)
        .map(([i, v]) => Number(i));
});
</script>

<template>
    <Transition name="mobile-filter">
        <div v-if="open" class="fixed z-50 px-5 top-0 bottom-0 h-full right-0 left-0 pt-[15px] pb-[45px] border-t-2 bg-white overflow-y-scroll">
            <div class="mb-[34px]">
                <header class="flex items-center justify-between mb-[34px]">
                    <button @click="() => $emit('close')" class="flex justify-center font-[Raleway] items-center gap-x-[10px]">
                        <span class="rounded-full relative flex items-center justify-center h-5 w-5 bg-[#1DA958]">
                            <app-i name="heroicons-solid:chevron-left" class="text-white absolute" />
                        </span>
                        <p class="text-[13px] leading-[15px] italic font-extralight text-[#131313]">Назад</p>
                    </button>

                    <p class="leading-9 text-[26px] font-bold font-[Raleway]">Фильтры</p>

                    <button @click="() => $emit('close')" class="cursor-pointer">
                        <app-i class="w-6 h-6 text-[#BDBDBD]" name="material-symbols:close" />
                    </button>
                </header>

                <div class="flex items-center justify-center gap-x-4 border border-[#f8f8f8] rounded-[5px] py-4 px-3">
                    <app-i name="heroicons-outline:search" class="text-[#1DA958] w-[17px] h-[17px] cursor-pointer" />
                    <input autofocus type="text" placeholder="Название новостройки или застройщика" class="flex-grow" />
                </div>
            </div>

            <div class="mb-6">
                <p class="mb-[13px] text-[12px] leading-[14px] qnt-normal font-[Raleway] text-[#4F4F4F]">Выберите тип квартиры</p>

                <button @click="() => toggleApartmentTypeRef()" class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border border-[#f8f8f8] rounded-[5px] w-full" :class="[`hg-${apartmentTypes.length}`, apartmentTypeRef ? 'border-b-0 rounded-b-none' : '']">
                    <p class="text-[16px] leading-[14px] font-medium text-[#4F4F4F]">Тип квартиры</p>
                    <app-i name="ic:baseline-keyboard-arrow-down" :class="['text-[#3478F6] h-5 w-5 transition-transform duration-300', apartmentTypeRef ? 'rotate-180' : '']" />
                </button>

                <Transition name="shrink">
                    <ul v-if="apartmentTypeRef" class="overflow-hidden pb-[10px] pt-[6px] px-3 border border-t-0 border-[#f8f8f8] rounded-b-[5px]">
                        <li v-for="(tp, i) in apartmentTypes" :key="i" class="flex items-center gap-x-3 mb-[14px]">
                            <input v-model="selectedTypesIndexes[i]" :id="IDS[i]" type="checkbox" class="w-[18px] h-[18px] border border-[#0000001f] rounded-[2px]" />
                            <label :for="IDS[i]" class="font-normal text-[13px] leading-[14px] font-[Inter] text-[#141414]">{{ tp }}</label>
                        </li>
                    </ul>
                </Transition>

                <ul class="flex items-center flex-wrap">
                    <li v-for="v in selectedTypesLables" :key="v" class="bg-[#3478F6] mt-3 rounded-md mr-[5px] py-[3px] px-2">
                        <span class="text-white mr-2 text-[13px] font-semibold leading-[14px] font-[Inter]">{{ apartmentTypes[v] }}</span>
                        <button @click="() => unpick(v)">
                            <app-i class="w-4 h-4 text-white" name="material-symbols:close" />
                        </button>
                    </li>
                </ul>
            </div>

            <div class="mb-6 relative" v-if="!apartmentTypeRef">
                <p class="mb-[13px] text-[12px] leading-[14px] font-normal font-[Raleway] text-[#4F4F4F]">Задайте стоимость</p>
                <button class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border border-[#f8f8f8] rounded-[5px] w-full">
                    <ol class="text-[#4F4F4F] text-[14px] font-medium leading-4 font-[Inter] flex items-center justify-between w-full">
                        <li>
                            <p>от <span class="text-[#3478F6]">3.9 млн ₽</span></p>
                        </li>
                        <li>
                            <p>до <span class="text-[#3478F6]">43.9 млн ₽</span></p>
                        </li>
                    </ol>
                </button>
                <range-input class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto" />
            </div>

            <div class="mb-6 relative" v-if="!apartmentTypeRef">
                <p class="mb-[13px] text-[12px] leading-[14px] font-normal font-[Raleway] text-[#4F4F4F]">Задайте площадь</p>
                <button class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border border-[#f8f8f8] rounded-[5px] w-full">
                    <ol class="text-[#4F4F4F] text-[14px] font-medium leading-4 font-[Inter] flex items-center justify-between w-full">
                        <li>
                            <p>от <span class="text-[#3478F6]">58 м²</span></p>
                        </li>
                        <li>
                            <p>до <span class="text-[#3478F6]">87 м²</span></p>
                        </li>
                    </ol>
                </button>
                <range-input class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto" />
            </div>

            <div class="mb-6">
                <p class="mb-[13px] text-[12px] leading-[14px] font-normal font-[Raleway] text-[#4F4F4F]">Выберите срок аренды</p>
                <button class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border border-[#f8f8f8] rounded-[5px] w-full">
                    <p class="text-[16px] leading-[14px] font-medium text-[#4F4F4F]">12 месяцев</p>
                    <app-i name="ic:baseline-keyboard-arrow-down" class="text-[#3478F6] h-5 w-5" />
                </button>
            </div>

            <button class="mx-auto flex items-center justify-center gap-x-[14px] mb-6">
                <app-i class="w-5 h-5 text-[#1DA958]" name="material-symbols:close" />
                <p class="text-[13px] leading-[13px] font-bold font-[Inter] text-[#131313]">Сбросить фильтры</p>
            </button>

            <Button label="Показать 852 предложения" class="bg-[#E71F61] text-white w-full" />
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.mobile-filter-enter-active {
    transition: all 0.3s ease-out;
}

.mobile-filter-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.mobile-filter-enter-from,
.mobile-filter-leave-to {
    transform: translateX(375px);
}

/* ************************************* Shrink ************************************* */
@mixin apartment_types_count($rows: 10) {
    @for $i from 1 through $rows {
        &.hg-#{$i} {
            height: ($i * 14px) + (6px + 10px);
        }
    }
}

.shrink-enter-active {
    transition: all 0.3s ease-out;
}
.shrink-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.shrink-enter-from,
.shrink-leave-to {
    opacity: 0;
    height: 0;
}

.shrink-enter-to {
    height: 241px;
    @include apartment_types_count;
}
.shrink-leave-from {
    height: 241px;
    @include apartment_types_count;
}

// ********************

input[type="checkbox"]:checked {
    position: relative;

    &::after {
        content: " ";
        @include abs-expand;
        border-radius: 2px;
        background-color: #3478f6;
    }
}
</style>
