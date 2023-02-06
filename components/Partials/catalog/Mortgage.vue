<script setup lang="ts">
import LoanOffer from "~/components/Partials/catalog/LoanOffer.vue";
import RangeInput from "~/components/UI/TowThumbsRangeInput.vue";
import { format_thousands } from "~/utils";

const props = defineProps<{ id: string; deadlines?: any[]; rooms?: { label: string; value: Numberish }[]; complexName?: string; minPrice?: number; maxPrice?: number; banks?: any[] }>();

const isMatch = useMediaQuery("(min-width: 768px)");

const banks = computed(() => props.banks ?? []);

const options = ["Все программы", "Оптимальные условия"];

const current = shallowRef(0);

const percents_options = [
    { value: "percents-1", label: "Субсидированная застройщиком" },
    { value: "percents-1", label: "Ипотека с Господдержкой" },
    { value: "percents-1", label: "Семейная ипотека" },
    { value: "percents-1", label: "Военная ипотека" },
    { value: "percents-1", label: "Материнский капитал" },
];

const { state: mortgageForm, pay_per_month, reset } = useMortgageForm();

const ignite = () => {
    reset();

    mortgageForm.value.price = props.minPrice;
    mortgageForm.value.advance = props.minPrice * 0.15;
};

onMounted(ignite);

watch(current, (v) => {
    v === 1 && ignite();
});

watch(
    () => mortgageForm.value.price,
    (v, _v) => {
        mortgageForm.value.advance = Math.floor(v * 0.15);
    }
);
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

                <div class="form-section mb-[23px] flex flex-col md:flex-row gap-[9px] md:gap-4 md:col-span-2 md:mb-0">
                    <app-select class="flex-grow" v-model="mortgageForm.home" :options="deadlines" label="Срок сдачи" bg />
                    <app-select class="flex-grow" v-model="mortgageForm.room_count" :options="rooms" label="Комнатность" bg />
                </div>

                <div class="form-section mb-[23px] md:col-span-1 md:mb-0">
                    <labled-range-input label="Стоимость недвижимости" v-model:last_range="mortgageForm.price" :max="maxPrice" :min="minPrice" max-label="₽" bg>
                        <template #thums>
                            <range-input class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto md:w-full" uni :max="maxPrice" :min="minPrice" v-model:last_range="mortgageForm.price" />
                        </template>
                    </labled-range-input>
                </div>

                <div class="form-section mb-[23px] md:col-span-1 md:mb-0">
                    <labled-range-input label="Первый взнос" v-model:last_range="mortgageForm.advance" :max="mortgageForm.price" :min="mortgageForm.price * 0.15" bg>
                        <template #thums>
                            <range-input :key="mortgageForm.price" class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto md:w-full" uni :max="mortgageForm.price" :min="mortgageForm.price * 0.15" v-model:last_range="mortgageForm.advance" />
                        </template>

                        <template #max-label>
                            <div class="flex gap-5">
                                <p class="flex text-gray-400">{{ `${Math.floor((100 * mortgageForm.advance) / mortgageForm.price)}%` }}</p>
                                <p class="text-[#1DA958]">₽</p>
                            </div>
                        </template>
                    </labled-range-input>
                </div>

                <div class="form-section mb-[23px] md:col-span-1 md:mb-[41px]">
                    <labled-range-input label="Срок кредита" v-model:last_range="mortgageForm.credit_period" :max="30" :min="1" max-label="лет" bg>
                        <template #thums>
                            <range-input class="absolute bottom-0 w-11/12 left-0 right-0 mx-auto md:w-full" uni :step="1" :max="30" :min="1" v-model:last_range="mortgageForm.credit_period" />
                        </template>
                    </labled-range-input>
                </div>

                <div class="form-section mb-[25px] md:col-span-3 md:mb-0">
                    <!-- prettier-ignore -->
                    <app-radio
                        disabled
                        :options="percents_options"
                        class="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-5 mb-8"
                        v-model="mortgageForm.selected_percents"
                    />
                </div>
            </div>

            <!-- ---------------------------------------- -->

            <template #foot>
                <loan-offer v-for="(bank, i) in banks" :key="i" :bank="bank" :advance="`${format_thousands(mortgageForm.advance)} ₽`" :period="mortgageForm.credit_period" :percents="mortgageForm.selected_percents">
                    <template #slot-data="{ bank }"> {{ pay_per_month(bank) }} </template>
                </loan-offer>
            </template>
        </NuxtLayout>
    </div>
</template>
