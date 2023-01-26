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
    <component :id="id" :is="tag" :class="['some-random', 'max-w-[1441px] w-full mx-auto', padding ? 'px-5 md:px-[60px]' : '', $attrs.class]">
        <slot />
    </component>
</template>
