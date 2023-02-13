<script lang="ts" setup>
// prettier-ignore
const props = withDefaults(defineProps<{
    from: Numberish;
    to: Numberish;
    step?: Numberish;
    max: Numberish;
    min: Numberish;
    maxPlaceHolder?: string;
    minPlaceHolder?: string;
}>(), {
    step: 1,
    maxPlaceHolder: 'Значение от',
    minPlaceHolder: 'Значение до'
});

defineEmits(["update:from", "update:to"]);

const extract = (e: Event) => parseInt((e.target as HTMLInputElement).value);
</script>

<template>
    <div :class="$attrs.class">
        <!-- prettier-ignore -->
        <input
            :value="from"
            type="number"
            :max="max"
            :min="min"
            :step="step"
            @input="(e) => $emit('update:from', extract(e))"
            class="p-2 shadow-md w-1/2 rounded border"
            :placeholder="minPlaceHolder"
        />
        <!-- prettier-ignore -->
        <input
            :value="to"
            type="number"
            :max="max"
            :min="min"
            :step="step"
            @input="(e) => $emit('update:to', extract(e))"
            class="p-2 shadow-md w-1/2 rounded border"
            :placeholder="maxPlaceHolder"
        />
    </div>
</template>
