<script setup lang="ts">
import LoanOffer from "~/components/Partials/catalog/LoanOffer.vue";
import RangeInput from "~/components/UI/TowThumbsRangeInput.vue";
import { format_thousands } from "~/utils";

const props = defineProps<{ id: string; deadlines?: any[]; rooms?: { label: string; value: Numberish }[]; complexName?: string; minPrice?: number; maxPrice?: number; banks?: any[] }>();

const banks = computed(() => props.banks ?? []);

const current = shallowRef(0);

const options = ["Все программы", "Оптимальные условия"];

const percents_options = [
    { value: "percents", label: "Субсидированная застройщиком" },
    { value: "percents", label: "Ипотека с Господдержкой" },
    { value: "percents", label: "Семейная ипотека" },
    { value: "percents", label: "Военная ипотека" },
    { value: "percents", label: "Материнский капитал" },
];

const selected_percents = shallowRef(percents_options[0].value);

const isMatch = useMediaQuery("(min-width: 768px)");

const price = shallowRef<number>(props.minPrice);
const advance = shallowRef<number>(props.minPrice * 0.15);
const credit_period = shallowRef<number>(20);

watch(price, (v, _v) => {
    advance.value = Math.floor(v * 0.15);
});

const pay_per_month = (bank: any) => {
    const months = credit_period.value * 12;
    const sum = price.value - advance.value;
    const percents = bank[selected_percents.value];

    if (typeof percents === "number") {
        const percentOnMonth = percents / 100 / 12;

        const monthly_price = (sum * percentOnMonth) / (1 - Math.pow(1 + percentOnMonth, -months));

        return `${format_thousands(Math.round(monthly_price))} ₽`;
    }

    return "_";
};
</script>

<template>
    <div :id="id">
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0 md:px-[46px] md:pb-[33px] md:pt-[90px]']">
            <template #head>
                <div class="md:flex md:justify-between md:items-center md:mb-12">
                    <h1 class="mb-[19px] md:mb-0 text-[26px] md:text-[24px] font-bold md:font-extrabold leading-9 md:leading-[28px] font-[Raleway] text-[#131313]">Ипотека</h1>

                    <client-only>
                        <x-scroll-header :choices="options" v-model="current" :dotted-border="!isMatch" :padding="false" class="mb-[21px] md:mb-0" />
                    </client-only>
                </div>
            </template>

            <!-- form -->
            <div class="md:grid grid-cols-3 md:gap-y-[29px] md:gap-x-4">
                <app-select class="form-section mb-[23px] md:col-span-1 md:mb-0" :options="[]" label="Новостройка" disabled bg>
                    <template #inner-label>
                        <p class="text-[16px] leading-[14px] font-medium text-[#828282]">
                            {{ complexName }}
                        </p>
                    </template>
                </app-select>

                <div class="form-section mb-[23px] flex gap-[9px] md:gap-4 md:col-span-2 md:mb-0">
                    <app-select class="flex-grow" :options="deadlines" label="Срок сдачи" bg />
                    <app-select class="flex-grow" :options="rooms" label="Комнатность" bg />
                </div>

                <div class="form-section mb-[23px] md:col-span-1 md:mb-0">
                    <labled-range-input label="Стоимость недвижимости" v-model:last_range="price" :max="maxPrice" :min="minPrice" max-label="₽" bg>
                        <template #thums>
                            <range-input class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto md:w-full" uni :max="maxPrice" :min="minPrice" v-model:last_range="price" />
                        </template>
                    </labled-range-input>
                </div>

                <div class="form-section mb-[23px] md:col-span-1 md:mb-0">
                    <labled-range-input label="Первый взнос" v-model:last_range="advance" :max="price" :min="price * 0.15" bg>
                        <template #thums>
                            <range-input class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto md:w-full" uni :max="price" :min="price * 0.15" v-model:last_range="advance" />
                        </template>

                        <template #max-label>
                            <div class="flex gap-5">
                                <p class="flex text-gray-400">{{ `${Math.floor((100 * advance) / price)}%` }}</p>
                                <p class="text-[#1DA958]">₽</p>
                            </div>
                        </template>
                    </labled-range-input>
                </div>

                <div class="form-section mb-[23px] md:col-span-1 md:mb-[41px]">
                    <labled-range-input label="Срок кредита" v-model:last_range="credit_period" :max="30" :min="1" max-label="лет" bg>
                        <template #thums>
                            <range-input class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto md:w-full" uni :step="1" :max="30" :min="1" v-model:last_range="credit_period" />
                        </template>
                    </labled-range-input>
                </div>

                <div class="form-section mb-[25px] md:col-span-3 md:mb-0">
                    <app-radio :options="percents_options" class="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-5 mb-8" v-model="selected_percents" />
                </div>
            </div>
            <!-- ---------------------------------------- -->

            <template #foot>
                <loan-offer v-for="(bank, i) in banks" :key="i" :bank="bank" :advance="`${format_thousands(advance)} ₽`" :period="credit_period" :percents="selected_percents">
                    <template #slot-data="{ bank }"> {{ pay_per_month(bank) }} </template>
                </loan-offer>
            </template>
        </NuxtLayout>
    </div>
</template>
