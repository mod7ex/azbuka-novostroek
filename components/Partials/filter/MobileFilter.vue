<script setup lang="ts">
import RawMobileFilter from "~/components/Partials/filter/RawMobileFilter.vue";

const [isCollapsed, toggle] = useToggle();

const { filter, reset } = useFilter();
</script>

<template>
    <app-width class="md:hidden relative">
        <div class="relative">
            <div class="border border-gray-200 absolute left-0 right-0 -top-3 bg-white p-3 rounded">
                <div class="app-shadow border border-[#3478f624] rounded mb-4">
                    <!-- prettier-ignore -->
                    <text-search
                        v-model="filter.name"
                        :class="['max-w-md mx-auto px-[18px] h-[50px]']"
                    />
                    <raw-mobile-filter @full-filter="() => toggle()" :is-full-filter-open="!isCollapsed" class="z-50 px-[18px] pb-2" />
                </div>

                <!-- full filter -->
                <div v-if="!isCollapsed" class="app-shadow border border-[#3478f624] rounded mb-6 p-[18px]">
                    <div class="mb-[18px] text-[#4F4F4F]">
                        <p class="mb-2 font-[Raleway] text-[13px] leading-[15px] italic font-light">Расположение</p>

                        <ul class="font-[Inter] font-medium text-[14px] leading-4 flex flex-col gap-[14px]">
                            <li>Регион</li>
                            <li>Город</li>
                            <li>Адм. район</li>
                            <li>Народный район</li>
                        </ul>
                    </div>

                    <div class="mb-[18px] text-[#4F4F4F]">
                        <p class="mb-2 font-[Raleway] text-[13px] leading-[15px] italic font-light">Дом</p>

                        <ul class="font-[Inter] font-medium text-[14px] leading-4 flex flex-col gap-[14px]">
                            <li>Класс недвижимости</li>
                            <li>Материал стен</li>
                            <li>Этажей в доме</li>
                            <li>Паркинг</li>
                            <li>Лифт</li>
                            <li>Коммерция</li>
                        </ul>
                    </div>

                    <div class="text-[#4F4F4F]">
                        <p class="mb-2 font-[Raleway] text-[13px] leading-[15px] italic font-light">Квартира</p>

                        <ul class="font-[Inter] font-medium text-[14px] leading-4 flex flex-col gap-[14px]">
                            <li>Этаж</li>
                            <li>Отделка</li>
                            <li>Общая площадь</li>
                            <li>Площадь жилья</li>
                            <li>Площадь кухни</li>
                            <li>Санузел</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <button class="mx-auto flex items-center justify-center gap-x-[14px] mb-6" @click="reset">
                        <app-i class="w-5 h-5 text-[#1DA958]" name="material-symbols:close" />
                        <p class="text-[13px] leading-[13px] font-bold font-[Inter] text-[#131313]">Сбросить фильтры</p>
                    </button>

                    <Button @click="() => $emit('search')" label="Показать 852 предложения" class="bg-[#E71F61] text-white w-full" />
                </div>
            </div>
        </div>
    </app-width>
</template>
