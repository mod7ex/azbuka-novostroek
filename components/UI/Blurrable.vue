<script setup lang="ts">
import { queuedLast } from "~/utils";

const props = withDefaults(defineProps<{ tag?: string; condition?: () => boolean }>(), {
    tag: "div",
    condition: () => true,
});

const emit = defineEmits(["blurred"]);

const containerRef = ref();

queuedLast(() => {
    useClickOutside(
        containerRef,
        (e) => {
            props.condition() && emit("blurred", e);
        },
        false
    );
});
</script>

<template>
    <component :is="tag" ref="containerRef" :class="$attrs.class">
        <slot />
    </component>
</template>
