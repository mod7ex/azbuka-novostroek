<script setup lang="ts">
const props = defineProps<{ complex?: any; home?: any; id?: string }>();

const computeDeadline = ({ stage, quarter_end, year_end }) => {
    if (stage?.name.toLocaleLowerCase() === "сдан") return "Сдан";
    else if (quarter_end && year_end) return `${quarter_end} квартал ${year_end}`;
    else return undefined;
};

const choices = computed(() => {
    return (
        props.complex?.homes?.map(({ id, name, stage, quarter_end, year_end }) => {
            const _dead_line = computeDeadline({ quarter_end, stage, year_end });

            return { value: id, label: `${name} ${_dead_line ? `(${_dead_line})` : ""}` };
        }) ?? []
    );
});

const currentHome = useCurrentHome();

const stage = computed(() => {
    return props?.home?.stage;
});

const deadline = computed(() => {
    const _home = props?.home;
    if (_home) computeDeadline(_home);
    return undefined;
});

const options = ["Характеристики", "Документы", "Ход строительства"];
const current = shallowRef(0);

// -----------------------------------------------------------

const construction = computed(() => {
    return props.home?.building ?? [];
});

// -----------------------------------------------------------

onMounted(() => {
    const _default = choices.value[0]?.value;
    if (_default == null) return undefined;
    currentHome.value = _default;
});
</script>

<template>
    <div :id="id">
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0 md:px-[46px]']">
            <template #head>
                <h1 class="text-[26px] md:text-[24px] font-bold md:font-extrabold leading-9 md:leading-[28px] font-[Raleway] text-[#131313]">Выбор дома</h1>
            </template>

            <x-scroll-header :choices="choices" v-model="currentHome" class="mb-[28px] mt-[22px]" buttons />

            <!-- 
                <ul class="mt-[22px] mb-8 md:mb-[50px] grid grid-cols-2 md:flex md:flex-wrap gap-[10px]">
                    <li v-for="(choice, i) in choices" :key="i" class="col-span-1 w-full md:w-fit">
                        <button :class="['py-2 w-full rounded-[3px] px-[18px] font-medium text-[13px] md:text-base md:leading-[19px] leading-[15px]', i == 0 ? 'bg-[#1DA958] text-white' : 'bg-[#D2EEDE]']">{{ choice }}</button>
                    </li>
                </ul>
            -->

            <x-scroll-header :choices="options" v-model="current" class="mb-[21px]" />

            <div class="mb-[28px] md:mb-0 md:grid md:grid-cols-2 md:gap-[55px]" v-if="current === 0">
                <ul class="md:col-span-1">
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Застройщик</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">{{ home?.developer_name ?? "Не заполнено" }}</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Город</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">{{ complex?.city?.name ?? "Не заполнено" }}</p>
                    </li>
                    <!-- <pre> {{ complex }} </pre> -->
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Район</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">{{ complex?.city?.region?.name ?? "Не заполнено" }}</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Адрес</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">{{ home?.address ?? "Не заполнено" }}</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Этап строительства</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">{{ stage?.name ?? "Не заполнено" }}</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Срок здачи</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">{{ deadline ?? "Не заполнено" }}</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Класс дома</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">{{ home?.homeClass?.name ?? "Не заполнено" }}</p>
                    </li>
                </ul>
                <ul class="md:col-span-1">
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Технология строительства</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">есть</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Этажность</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">{{ home?.count_floors ?? "Не заполнено" }}</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Высота потолков</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">{{ home?.ceiling_height ?? "Не заполнено" }}</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Пассажирский лифт</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">{{ home?.lift || "Нет" }}</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Грузовой лифт</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">{{ home?.freight_lift || "Нет" }}</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between mb-4">
                        <p class="font-normal text-[#878787]">Закрытая территория</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">_</p>
                    </li>
                    <li class="text-[13px] leading-[15px] font-[Inter] flex items-end justify-between">
                        <p class="font-normal text-[#878787]">Наземный паркинг</p>
                        <span class="flex-grow border-b border-dotted border-[#00000014] mx-1"></span>
                        <p class="font-medium text-[#131313]">_</p>
                    </li>
                </ul>
            </div>

            <div class="mb-3" v-if="current === 2">
                <div class="relative h-44 overflow-x-scroll no-scroll-thum mb-5">
                    <ul class="absolute top-0 bottom-0 flex items-stretch gap-1">
                        <li v-for="({ url, title, updated }, i) in construction" :key="i">
                            <div class="w-56 h-36 cursor-pointer construction-img-container" :data-tooltip="`Обновлено: ${updated}`">
                                <app-img :src="url" class="rounded-[5px] mb-2" fill />

                                <button v-if="i != 0" class="text-white w-[40px] h-[40px] top-0 bottom-0 my-auto -mx-5 absolute z-50 bg-[#1DA958] rounded-[2px]">
                                    <app-i name="material-symbols:arrow-right-alt-rounded" />
                                </button>
                            </div>

                            <p class="font-[Inter] text-[14px] leading-5 pl-6">
                                <span class="font-bold">{{ title.split(",")[0] }}</span>
                                <span class="ml-[5px] text-[#878787] font-normal">{{ title.split(",")[1] }}</span>
                            </p>
                        </li>
                    </ul>
                </div>

                <div class="bg-[#F9F9F9] rounded-[3px] py-[7px] px-[15px]">
                    <ul class="flex items-center justify-between">
                        <li class="flex items-center justify-start">
                            <p class="mr-[14px] font-[Inter] text-[13px] font-medium leading-[15px]">Рассказать:</p>

                            <button class="flex items-center justify-center w-7 h-7 relative border-[1.6px] border-[#1da95814] bg-white rounded-full p-1 star cursor-pointer">
                                <app-i class="absolute text-[#3478F6] w-[11.5px] h-[11.5px]" name="akar-icons:vk-fill" />
                            </button>
                        </li>
                        <li>
                            <button class="flex items-center justify-center w-[28px] h-[28px] md:w-[40px] md:h-[40px] relative bg-[#E71F61] rounded-full cursor-pointer">
                                <app-i class="absolute text-white w-3 h-3 md:w-5 md:h-5" name="ic:round-local-phone" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- <template #foot> <dashed-devider class="md:hidden" /> </template> -->
        </NuxtLayout>
    </div>
</template>

<style lang="scss">
.construction-img-container {
    position: relative;

    &::before {
        content: attr(data-tooltip);
        position: absolute;
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
        padding: 3px 6px;
        visibility: hidden;
        opacity: 0;
        top: 0 !important;
        bottom: 0 !important;
        left: 0 !important;
        right: 0 !important;
        @include flex;
    }

    &:hover::before {
        visibility: visible;
        transition: opacity $duration ease-out;
        opacity: 1;
    }
}
</style>
