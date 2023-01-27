<script setup lang="ts">
import YandexReviews from "~/components/Partials/home/YandexReviews.vue";
import Suggestions from "~/components/Partials/home/Suggestions.vue";
// import Advantages from "~/components/Partials/home/Advantages.vue";
// import Locations from "~/components/Partials/home/Locations.vue";
// import About from "~/components/Partials/home/About.vue";
import { SECTIONS } from "~/constants";

// useMountAnimation();
</script>

<template>
    <div>
        <NuxtLayout>
            <Suggestions :id="SECTIONS.COMPLEXES" sort class="mount-animation anm-hidden border border-transparent" />

            <client-only>
                <yandex-reviews />
            </client-only>

            <!-- <Locations class="mount-animation anm-hidden" /> -->
            <!-- <About class="mount-animation anm-hidden" /> -->
            <!-- <Advantages class="mount-animation anm-hidden" /> -->
        </NuxtLayout>
    </div>
</template>
