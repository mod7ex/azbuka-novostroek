<!--
import Default from "~/components/Partials/layouts/default.vue";
import { h, defineComponent } from "vue";

export default defineComponent({
    setup(_, { slots }) {
        return () => h(Default, { inner: true }, () => slots.default());
    },
});
-->

<script setup lang="ts">
import Default from "~/layouts/default.vue";
</script>

<template>
    <Default inner>
        <slot />
    </Default>
</template>
