<script setup lang="ts">
withDefaults(defineProps<{ isCollapsed?: boolean; handelBlur?: () => void; tag?: string; transition?: string; condition?: () => boolean }>(), {
    tag: "div",
    transition: "slide-up-fade-out",
    condition: () => true,
});
</script>

<template>
    <Transition :name="transition" :aria-expanded="isCollapsed">
        <!-- prettier-ignore -->
        <Blurrable
            :tag="tag"
            :class="$attrs.class"
            @blurred="handelBlur"
            :condition="condition"
            v-if="!isCollapsed"
        >
            <slot></slot>
        </Blurrable>
    </Transition>
</template>
