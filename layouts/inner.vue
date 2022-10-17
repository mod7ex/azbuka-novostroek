<script setup lang="ts">
import Default from "~/layouts/default.vue";
</script>

<template>
    <Default inner class="inner-bg">
        <slot />
    </Default>
</template>

<style scoped lang="scss">
.inner-bg {
    background: rgb(#e5e5e5);
    background: linear-gradient(180deg, rgba(#e5e5e5, 1) 4.5%, rgba(255, 255, 255, 1) 4.5%, rgba(255, 255, 255, 1) 100%);
}
</style>
