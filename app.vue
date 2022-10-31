<script setup lang="ts">
import "@/assets/scss/index.scss";
</script>

<template>
    <NuxtPage />
</template>

<style lang="scss">
.mount-animation {
    transition: all 700ms ease-out;

    @media (prefers-reduced-motion) {
        transition: none;
    }

    &.anm-hidden {
        opacity: 0;
        filter: blur(5px);
        transform: translateY(100px);
    }

    &.show {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
    }
}
</style>
