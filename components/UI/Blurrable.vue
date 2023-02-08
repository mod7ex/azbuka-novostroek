<script setup lang="ts">
const props = withDefaults(defineProps<{ tag?: string; condition?: () => boolean }>(), {
    tag: "div",
    condition: () => true,
});

const emit = defineEmits(["blurred"]);

const containerRef = ref();

useClickOutside(containerRef, (e) => {
    props.condition() && emit("blurred", e);
});
</script>

<template>
    <component :is="tag" ref="containerRef" :class="$attrs.class">
        <slot />
    </component>
</template>
