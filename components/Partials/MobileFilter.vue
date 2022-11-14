<script setup lang="ts">
withDefaults(defineProps<{ open: boolean }>(), {
    open: false,
});

defineEmits(["close"]);
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

                <div class="flex items-center justify-center gap-x-4 border border-[#3478f624] rounded-[5px] py-4 px-3">
                    <app-i name="heroicons-outline:search" class="text-[#1DA958] w-[17px] h-[17px] cursor-pointer" />
                    <input autofocus type="text" placeholder="Название новостройки или застройщика" class="flex-grow" />
                </div>
            </div>

            <app-select class="mb-6" :options="['1 комн.', '2 комн.', '3 комн.', '4 комн.', '5 комн.', '6 комн.', 'Студия']" label="Выберите тип квартиры" inner-label="Тип квартиры" shrink />

            <div class="mb-6 relative">
                <labled-range-input class="bg-white" label="Задайте стоимость">
                    <template #min-label>
                        <p>от <span class="text-[#3478F6]">3.9 млн ₽</span></p>
                    </template>

                    <template #max-label>
                        <p>до <span class="text-[#3478F6]">43.9 млн ₽</span></p>
                    </template>
                </labled-range-input>
            </div>

            <div class="mb-6 relative">
                <labled-range-input class="bg-white" label="Задайте площадь">
                    <template #min-label>
                        <p>от <span class="text-[#3478F6]">58 м²</span></p>
                    </template>

                    <template #max-label>
                        <p>до <span class="text-[#3478F6]">87 м²</span></p>
                    </template>
                </labled-range-input>
            </div>

            <div class="mb-6">
                <p class="mb-[13px] text-[12px] leading-[14px] font-normal font-[Raleway] text-[#4F4F4F]">Выберите срок аренды</p>
                <button class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border border-[#3478f624] rounded-[5px] w-full">
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
</style>
