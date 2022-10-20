<script setup lang="ts">
import Default from "~/layouts/default.vue";
</script>

<template>
    <Default inner class="inner-bg">
        <slot />
    </Default>
</template>

<style scoped lang="scss">
$bg-md: rgba(229, 240, 252);
$wh-md: #f9fcff;
$pr-md: 4%;

$bg: rgba(229, 240, 252);
$wh: white;
$pr: 6.25%;

.inner-bg {
    background: linear-gradient(180deg, rgba($bg, 0.5) $pr, $wh $pr, $wh 100%);

    @include break_point(768px) {
        background: linear-gradient(180deg, rgba($bg-md, 0.5) $pr-md, $wh-md $pr-md, $wh-md 100%);

        // background: linear-gradient(180deg, rgba($bg, 0.1) 2.25%, $wh 100%), rgba($bg, 0.3);
    }
}
</style>
