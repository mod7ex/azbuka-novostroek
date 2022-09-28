<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<template>
    <section :id="id" :class="[$attrs.class, 'app-section']">
        <slot name="head" />

        <div :class="$attrs.body_class">
            <slot />
        </div>

        <slot name="foot" />
    </section>
</template>
