<script setup lang="ts">
import { format_thousands } from "~/utils";

const props = withDefaults(defineProps<{ isCollapsed?: boolean; handelBlur?: () => void; fromLabel?: string; toLabel?: string; step: number; from: Numberish; to: Numberish; min?: number; max?: number }>(), {
    fromLabel: "Значение от",
    toLabel: "Значение до",
});

const options = computed(() => {
    const { min: min_value, max: max_value, step } = props;

    let _options = [min_value];

    for (let i = 0; i < max_value + 1; i++) {
        const _value = i * step;

        if (min_value < _value && _value <= max_value) _options.push(_value);
    }

    return _options;
});

const emit = defineEmits(["update:from", "update:to"]);

const handelFrom = (e: Event) => {
    const _target = e.target as HTMLElement;
    if (_target.tagName === "BUTTON") {
        const _from = parseInt(_target.dataset.value);
        if (Number.isNaN(_from)) return;

        emit("update:from", _from);
    }
};

const handelTo = (e: Event) => {
    const _target = e.target as HTMLElement;
    if (_target.tagName === "BUTTON") {
        const _to = parseInt(_target.dataset.value);
        if (Number.isNaN(_to)) return;

        emit("update:to", _to);
    }
};

const handelInput = (e: Event, el: "from" | "to") => {
    const _target = e.target as HTMLInputElement;
    emit(`update:${el}`, _target.value);
};
</script>

<template>
    <!-- prettier-ignore -->
    <filter-wrapper
        :is-collapsed="isCollapsed"
        @blured="handelBlur"
        class="text-xs divide-x absolute top-7 -left-16 z-50 bg-white app-shadow rounded py-[6px] min-w-[300px] flex"
    >
        <div class="px-3 py-[6px]">
            <input :value="from" type="text" class="border border-[#00000014] p-1 rounded mb-2 w-full" :placeholder="fromLabel" @input="(e) => handelInput(e, 'from')" />
            <ul class="max-h-96 overflow-y-scroll" @click="handelFrom">
                <li>
                    <button v-for="i in options" :key="`from-${i}`" :data-value="i" :disabled="i > parseInt(`${to}`)" :class="['rounded w-full text-left p-2', i > parseInt(`${to}`) ? 'text-gray-400' : 'hover:bg-gray-100', i == parseInt(`${from}`) ? 'bg-gray-300' : '']">
                        {{ format_thousands(i) }}
                    </button>
                </li>
            </ul>
        </div>
        <div class="px-3 py-[6px]">
            <input :value="to" type="text" class="border border-[#00000014] p-1 rounded mb-2 w-full" :placeholder="toLabel" @input="(e) => handelInput(e, 'to')" />
            <ul class="max-h-96 overflow-y-scroll" @click="handelTo">
                <li>
                    <button v-for="i in options" :key="`to-${i}`" :data-value="i" :disabled="i < parseInt(`${from}`)" :class="['rounded w-full text-left p-2', i < parseInt(`${from}`) ? 'text-gray-400' : 'hover:bg-gray-100', i == parseInt(`${to}`) ? 'bg-gray-300' : '']">
                        {{ format_thousands(i) }}
                    </button>
                </li>
            </ul>
        </div>
    </filter-wrapper>
</template>

<style scoped lang="scss">
ul::-webkit-scrollbar {
    width: 2px;
    height: 2px;
}

ul::-webkit-scrollbar-track {
    background-color: white;
}

ul::-webkit-scrollbar-thumb {
    background-color: darkgrey;
}

ul::-webkit-scrollbar-thumb:hover {
    background-color: #2563eb;
}

input::placeholder {
    font-size: 0.75rem /* 12px */;
    line-height: 1rem /* 16px */;
}
</style>
