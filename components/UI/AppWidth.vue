<script setup lang="ts">
withDefaults(
    defineProps<{
        tag?: string;
    }>(),
    {
        tag: "div",
    }
);
</script>

<template>
    <component :class="['max-w-6xl w-full mx-auto px-6 md:px-3', $attrs.class]" :is="tag">
        <slot />
    </component>
</template>
