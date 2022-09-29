<script setup lang="ts">
withDefaults(
    defineProps<{
        id?: string;
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
    <component :id="id" :is="tag" :class="$attrs.class">
        <div :class="['max-w-6xl w-full mx-auto', padding ? 'px-5 md:px-3' : '']">
            <slot />
        </div>
    </component>
</template>
