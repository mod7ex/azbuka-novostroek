<script setup lang="ts">
withDefaults(defineProps<{ isCollapsed?: boolean; handelBlur?: () => void; tag?: string }>(), {
    tag: "div",
});
</script>

<template>
    <Transition name="slide-up-fade-out" :aria-expanded="isCollapsed">
        <!-- prettier-ignore -->
        <Blurable
            :tag="tag"
            :class="['absolute top-7 z-50 bg-white app-shadow rounded py-[6px] min-w-[200px]', $attrs.class]"
            @blured="handelBlur"
            v-if="!isCollapsed"
        >
            <slot></slot>
        </Blurable>
    </Transition>
</template>
