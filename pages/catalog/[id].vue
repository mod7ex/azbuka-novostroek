<script setup lang="ts">
import MetaItems from "~/components/Partials/catalog/MetaItems.vue";
import TheBreadCrumb from "~/components/TheBreadCrumb.vue";
import BuildingCard from "~/components/Partials/catalog/Card.vue";
import BuildingSuggestions from "~/components/Partials/catalog/Suggestions.vue";
import BuildingDescription from "~/components/Partials/catalog/Description.vue";
import BuildingLocation from "~/components/Partials/catalog/Location.vue";
import BuildingChoices from "~/components/Partials/catalog/Choices.vue";
import BuildingMortgage from "~/components/Partials/catalog/Mortgage.vue";
import BuildingPromotion from "~/components/Partials/catalog/Promotion.vue";
// import BuildingDiscounts from "~/components/Partials/catalog/Discounts.vue";
import BuildingPlan from "~/components/Partials/catalog/Plan.vue";
// import BuildingReviews from "~/components/Partials/catalog/Reviews.vue";
import CTA from "~/components/Partials/catalog/CTA.vue";
import { SECTIONS } from "~/constants";
import { home as getHome, GQL_FOR_DETAIL as GQL_HOME_FOR_DETAIL } from "~/services/gql/homes";
import { complex as getComplex, GQL_FOR_DETAIL } from "~/services/gql/complexes";
import { debounce } from "~/utils";

const route = useRoute();

// complex
const { result, loading, error } = getComplex(route.params.id as string, GQL_FOR_DETAIL);
const complex = computed(() => result.value?.complex ?? null);

const computeDeadline = ({ stage, quarter_end, year_end }) => {
    if (stage?.name.toLocaleLowerCase() === "сдан") return "Сдан";
    else if (quarter_end && year_end) return `${quarter_end} квартал ${year_end}`;
    else return undefined;
};

// Homes rather (:
const deadlines = computed(() => {
    return (
        complex.value?.homes?.map(({ id, name, stage, quarter_end, year_end }) => {
            const _dead_line = computeDeadline({ quarter_end, stage, year_end });

            return { value: id, label: `${name} ${_dead_line ? `(${_dead_line})` : ""}` };
        }) ?? []
    );
});

/* ******************************************************************************************************** */

// Home
const currentHome = useCurrentHome();
const currentHomeID = reactive({ id: currentHome }); // [FIX] : just to fix @vue/apollo issue of using old values
const { result: homeResult, loading: homeLoading, error: homeError, refetch: homeRefetch, load } = getHome(currentHomeID, GQL_HOME_FOR_DETAIL);
const home = computed(() => homeResult.value?.home ?? null);

const discounts = computed(() => home.value?.discounts ?? []);

const rooms = computed(() => {
    let _options =
        home.value?.summary?.map(({ rooms: value }) => {
            let label = "";

            if (value === 0) label = "Студия";
            else if (value === 1) label = `1а комнатные `;
            else label = `${value}x комнатные`;

            return { label, value };
        }) ?? [];

    return [{ label: "Все", value: -1 }, ..._options];
});

watch(
    currentHome,
    debounce((id, oldID) => {
        if (oldID == null) return load();
        return homeRefetch({ id });
    })
);

/* ******************************************************************************************************** */

// https://nuxt.com/docs/getting-started/seo-meta

// useMountAnimation();
</script>

<template>
    <div class="relative">
        <meta-items />

        <NuxtLayout name="inner">
            <app-width class="mt-7 md:mt-[59px] mb-[33px] md:mb-[100px]" tag="section">
                <the-bread-crumb v-if="complex" :city="complex?.city" :complex="complex?.name" class="mb-[19px] md:mb-[40px]" />
                <building-card :complex="complex" class="mount-animation anm-hidden" />
            </app-width>

            <app-width class="tow-cols-md" id="anm-root">
                <div class="left">
                    <building-description v-if="complex" :complex="complex" :id="SECTIONS.DESCRIPTION" class="mount-animation anm-hidden catalog-section-p mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                    <client-only>
                        <building-location v-if="complex" :complex="complex" class="mount-animation anm-hidden catalog-section-p mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                        <div :id="SECTIONS.CHARACTERISTICS_AND_APARTMENTS" class="mount-animation anm-hidden catalog-section-p mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md md:pt-[40px]">
                            <building-choices v-if="complex" :loading="homeLoading" :city="complex?.city" :home="home" :deadlines="deadlines" class="border border-transparent mb-[25px]" />
                            <building-plan v-if="home" :home="home" :rooms="rooms" class="mb-[25px]" />
                        </div>

                        <building-mortgage
                            v-if="complex"
                            :complex-name="complex.name"
                            :min-price="complex.min_price"
                            :max-price="complex.max_price"
                            :banks="complex.banks"
                            :deadlines="deadlines"
                            :rooms="rooms"
                            :id="SECTIONS.MORTGAGE"
                            class="mount-animation anm-hidden catalog-section-p mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md"
                        />

                        <div :id="SECTIONS.STOCK">
                            <building-promotion v-for="item in discounts" :key="item?.id" :discount="item" :class="['mount-animation anm-hidden catalog-section-p md:rounded-[3px] mb-[25px] md:mb-[30px] md:bg-white']" />
                        </div>

                        <CTA class="mount-animation anm-hidden h-full md:hidden" />

                        <!--
                            <building-discounts class="mount-animation anm-hidden catalog-section-p mb-[25px] md:mb-[30px] md:bg-white md:rounded-[3px] shadow-inner-md" />

                            <div :id="SECTIONS.REVIEWS_QR" class="mount-animation anm-hidden bg-[#F9F9F9] md:bg-transparent mb-[37px] md:mb-[93px]">
                                <div class="bg-[#F9F9F9] shadow-inner-md pt-[25px] px-5 md:px-0 pb-[41px] md:pt-[38px] md:pb-[50px] w-fit">
                                    <building-reviews class="bg-[#F9F9F9] md:rounded-[3px]" />
                                </div>
                            </div>
                        -->

                        <building-suggestions v-if="complex?.id != null" :complex_id="complex?.id" class="mt-6" />
                    </client-only>
                </div>

                <div class="right pb-14">
                    <CTA class="mount-animation anm-hidden h-full" />
                </div>
            </app-width>
        </NuxtLayout>
    </div>
</template>

<style lang="scss" scoped>
.tow-cols-md {
    .right {
        display: none;
    }

    padding-left: 0;
    padding-right: 0;

    .left {
        .catalog-section-p {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    @include break_point(768px) {
        padding-left: 60px;
        padding-right: 60px;

        .left {
            .catalog-section-p {
                padding-left: 0;
                padding-right: 0;
            }
        }
    }

    @include break_point(1100px) {
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(12, minmax(0, 1fr));

        .left {
            grid-column: span 8 / span 8;
        }

        .right {
            display: block;
            grid-column: span 4 / span 4;
        }
    }
}
</style>
