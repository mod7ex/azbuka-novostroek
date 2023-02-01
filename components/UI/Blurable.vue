<script setup lang="ts">
import { queuedLast } from "~/utils";

withDefaults(defineProps<{ tag?: string }>(), {
    tag: "div",
});

const emit = defineEmits(["blured"]);

const containerRef = ref();

queuedLast(() => {
    useClickOutside(containerRef, (e) => emit("blured", e), false);
});
</script>

<template>
    <component :is="tag" ref="containerRef" :class="$attrs.class">
        <slot />
    </component>
</template>
