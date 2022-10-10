<script setup lang="ts">
import { queuedLast } from "~/utils";

withDefaults(defineProps<{ tag?: string }>(), {
    tag: "div",
});

const emit = defineEmits(["blured"]);

const containerRef = shallowRef();

queuedLast(() => {
    useClickOutside(containerRef, (e) => emit("blured", e));
});
</script>

<template>
    <component :is="tag" ref="containerRef" :class="$attrs.class">
        <slot />
    </component>
</template>
