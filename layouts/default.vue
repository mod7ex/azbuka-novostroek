<script setup lang="ts">
import TheDefaultHeader from "~/components/TheDefaultHeader.vue";
import ShowCase from "~/components/Partials/home/ShowCase.vue";
import Search from "~/components/Partials/home/Search.vue";
</script>

<template>
    <div>
        <div class="show-case-container">
            <div class="show-case-overlay">
                <app-width tag="header" class="py-1 md:py-3">
                    <client-only>
                        <the-default-header />
                    </client-only>
                </app-width>

                <app-width>
                    <show-case />
                </app-width>
            </div>
        </div>

        <app-width class="md:-mt-20 -mt-7 z-50 relative">
            <Search />
        </app-width>

        <app-width tag="main">
            <slot />
        </app-width>
    </div>
</template>

<style lang="scss" scoped>
.show-case-container {
    max-width: 1500px;
    margin: 0 auto;

    @include bg-img("background.jpg");

    @media screen and (min-width: 761px) {
        padding-bottom: 15rem;
    }

    .show-case-overlay {
        background: linear-gradient(179.92deg, rgba(#edf5fe, 0.1) 14.39%, rgba(255, 255, 255, 0) 99.93%), rgba(#edf5fe, 0.3);
    }
}
</style>
