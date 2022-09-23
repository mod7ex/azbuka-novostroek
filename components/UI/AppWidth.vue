<script setup lang="ts">
withDefaults(
    defineProps<{
        tag?: string;
        padding?: boolean;
    }>(),
    {
        tag: "div",
        padding: true,
    }
);
</script>

<template>
    <component :class="['max-w-6xl w-full mx-auto', $attrs.class, padding ? 'px-6 md:px-3' : '']" :is="tag">
        <slot />
    </component>
</template>
