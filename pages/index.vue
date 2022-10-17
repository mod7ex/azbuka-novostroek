<script setup lang="ts">
import Suggestions from "~/components/Partials/home/Suggestions.vue";
import Locations from "~/components/Partials/home/Locations.vue";
import About from "~/components/Partials/home/About.vue";
import Advantages from "~/components/Partials/home/Advantages.vue";
</script>

<template>
    <div>
        <NuxtLayout>
            <Suggestions sort />
            <Locations />
            <About />
            <Advantages />
        </NuxtLayout>
    </div>
</template>
