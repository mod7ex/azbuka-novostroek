<script setup lang="ts">
withDefaults(defineProps<{ isCollapsed?: boolean; handelBlur?: () => void; tag?: string; transition?: string }>(), {
    tag: "div",
    transition: "slide-up-fade-out",
});
</script>

<template>
    <Transition :name="transition" :aria-expanded="isCollapsed">
        <!-- prettier-ignore -->
        <Blurable
            :tag="tag"
            :class="$attrs.class"
            @blured="handelBlur"
            v-if="!isCollapsed"
        >
            <slot></slot>
        </Blurable>
    </Transition>
</template>
