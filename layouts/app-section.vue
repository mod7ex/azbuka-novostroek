<script setup lang="ts">
withDefaults(defineProps<{ id?: string; push_next?: boolean }>(), {
    push_next: true,
});
</script>

<template>
    <section :id="id" :class="[$attrs.class, 'app-section', push_next ? 'mb-9' : '']">
        <slot name="head" />

        <div :class="$attrs.body_class">
            <slot />
        </div>

        <slot name="foot" />
    </section>
</template>
