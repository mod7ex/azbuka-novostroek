<script setup lang="ts">
import { uuidGen } from "~/utils";
import { isArray } from "~/utils/types";

const props = withDefaults(
    defineProps<{
        options: Record<"label" | "value", Numberish>[];
        label?: string;
        innerLabel?: string;
        bg?: true;
        shrink?: true;
        disabled?: true;
        multiple?: true;
        modelValue?: Numberish | Numberish[];
    }>(),
    {
        innerLabel: "Любой",
    }
);

const emit = defineEmits(["update:modelValue"]);

const len = computed(() => props.options.length);

const [isCollaped, toggle] = useToggle(true);

const uuid = uuidGen("mobile-filter");

const IDS = Array.from(Array(len).keys()).map(() => uuid());

const init = (v = props.modelValue) => {
    return isArray(v) ? v : v == null ? [] : [v];
};

let selected = ref(new Set<Numberish>(init()));

watch(
    () => props.modelValue,
    (v) => {
        selected.value.clear();
        init(v).forEach((item) => selected.value.add(item));
    }
);

const selected_arr = (v: Iterable<Numberish>) => Array.from(v);

const emitSelection = () => {
    const _selection = selected_arr(selected.value);

    emit("update:modelValue", props.multiple ? _selection : _selection[0]);
};

const unpick = (v: Numberish) => {
    selected.value.delete(v);

    emitSelection();
};

const pick = (v: Numberish, checked: boolean) => {
    console.log(v, checked);

    if (!checked) return unpick(v);

    if (!props.multiple) selected.value.clear();
    selected.value.add(v);

    emitSelection();
};

const selectedOptions = computed(() => {
    return props.options.filter(({ value }) => selected.value.has(value));
});
</script>

<template>
    <div :class="[$attrs.class, shrink ? '' : 'relative', !isCollaped && !shrink ? 'shadow-select' : '']">
        <slot name="label">
            <p :class="['mb-[13px] text-[12px] leading-[14px] font-normal font-[Raleway] text-[#4F4F4F] md:font-extrabold md:text-black md:mb-[17px]', bg ? 'uppercase' : '']">
                {{ label }}
            </p>
        </slot>

        <button
            @click="() => toggle()"
            :disabled="disabled"
            class="flex justify-between font-[Raleway] items-center gap-x-[14px] py-[15px] px-3 border-[1.6px] rounded-[5px] w-full"
            :class="[`hg-${len} border-[#3478f624]`, !isCollaped ? 'border-b-0 rounded-b-none' : '', bg ? 'md:rounded-none md:border-[#1da95814] bg-[#1da95814] md:bg-[#FAFCFE]' : '']"
        >
            <slot name="inner-label">
                <p class="text-[16px] leading-[14px] font-medium" :class="[bg ? 'text-[#828282]' : 'text-[#4F4F4F]']">
                    {{ multiple ? innerLabel : selectedOptions[0]?.label ?? innerLabel }}
                </p>
            </slot>
            <app-i name="ic:baseline-keyboard-arrow-down" :class="[bg ? 'text-[#1DA958]' : 'text-[#3478F6]', ' h-5 w-5 transition-transform duration-300', isCollaped ? 'rotate-180' : '']" />
        </button>

        <Transition :name="shrink ? 'shrink' : 'slide-up-fade-out'">
            <Blurable @blured="() => toggle(true)" v-if="!isCollaped" :class="[shrink ? `hg-${len}` : 'absolute left-0 right-0 top-auto', bg ? 'md:border-[#1da95814]' : '', 'border-[#3478f624] bg-white overflow-hidden border-[1.6px] rounded-b-[5px] z-10 border-t-0 shadow-select-target']">
                <ul :class="[bg ? 'bg-[#1da95814] md:bg-[#FAFCFE]' : '', 'rounded-b-[5px] pb-[10px] pt-[6px] px-3']">
                    <li v-for="({ value, label }, i) in options" :key="i" class="mb-[14px] h-5">
                        <label :for="IDS[i]" class="flex items-center gap-x-3">
                            <input @change="(e) => pick(value, (e.target as HTMLInputElement).checked)" :checked="selected.has(value)" :id="IDS[i]" type="checkbox" class="w-[18px] h-[18px] border border-[#0000001f] rounded-[2px]" />
                            <span class="font-normal text-[13px] leading-[14px] font-[Inter] text-[#141414]">{{ label }}</span>
                        </label>
                    </li>
                </ul>
            </Blurable>
        </Transition>

        <ul v-if="multiple" class="flex items-center flex-wrap">
            <li v-for="{ label, value } in selectedOptions" :key="value" class="bg-[#3478F6] mt-3 rounded-md mr-[5px] py-[3px] px-2">
                <span class="text-white mr-2 text-[13px] font-semibold leading-[14px] font-[Inter]">{{ label }}</span>
                <button @click="() => unpick(value)">
                    <app-i class="w-4 h-4 text-white" name="material-symbols:close" />
                </button>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@mixin apartment_types_count($rows: 20) {
    @for $i from 1 through $rows {
        &.hg-#{$i} {
            height: ($i * (14px + 20px)) + (6px + 10px);
        }
    }
}

.shrink-enter-active {
    transition: all 0.3s ease-out;
}
.shrink-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.shrink-enter-from,
.shrink-leave-to {
    opacity: 0;
    height: 0;
}

.shrink-enter-to {
    @include apartment_types_count;
}
.shrink-leave-from {
    @include apartment_types_count;
}

/* ****************************************************** */

input[type="checkbox"]:checked {
    position: relative;

    &::after {
        content: " ";
        @include abs-expand;
        border-radius: 2px;
        background-color: #3478f6;
    }
}

.shadow-select {
    button {
        @include shadow($x: 0, $y: 8px, $blur: 6px, $spread: 1px, $color: rgba(0, 0, 0, 0.18));
    }

    .shadow-select-target {
        @include shadow($x: 0, $y: 8px, $blur: 6px, $spread: 1px, $color: rgba(0, 0, 0, 0.18));
    }
}
</style>
