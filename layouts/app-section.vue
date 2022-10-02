<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<template>
    <app-width tag="section" :id="id" :class="[$attrs.class, 'app-section']">
        <slot name="head" />

        <div :class="['body', $attrs.body_class]">
            <slot />
        </div>

        <slot name="foot" />
    </app-width>
</template>
