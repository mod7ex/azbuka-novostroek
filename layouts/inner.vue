<script setup lang="ts">
import Default from "~/layouts/default.vue";
</script>

<template>
    <Default inner class="inner-bg">
        <slot />
    </Default>
</template>

<style scoped lang="scss">
$bg-md: green;
// $bg-md: rgba(229, 240, 252);
$wh-md: #e5e5e5;
$pr-md: 2.25%;

$bg: rgba(229, 240, 252);
$wh: white;
$pr: 2.25%;

.inner-bg {
    background: linear-gradient(180deg, rgba($bg, 0.1) 4.5%, $wh 4.5%, $wh 100%);

    @include break_point(768px) {
        background: linear-gradient(180deg, rgba($bg-md, 0.2) $pr, $wh-md $pr-md, $wh-md 100%);

        // background: linear-gradient(180deg, rgba($bg, 0.1) 2.25%, $wh 100%), rgba($bg, 0.3);
    }
}
</style>
