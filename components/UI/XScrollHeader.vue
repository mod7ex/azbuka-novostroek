<script setup lang="ts">
const props = defineProps<{ choices: string[] | { label: string; value: Numberish }[]; modelValue: Numberish; buttons?: true }>();

const emit = defineEmits(["update:modelValue"]);

const handle = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;

    const index = Number(target.dataset.index);

    if (isNaN(index)) return;

    const choice = props.choices[index];

    emit("update:modelValue", typeof choice === "object" ? choice.value : index);
};
</script>

<template>
    <div @click="handle" v-if="buttons" :class="['overflow-x-scroll flex gap-2 no-scroll-thum font-medium text-[13px] leading-[15px] font-[Inter]', $attrs.class]">
        <button v-for="(choice, i) in choices" :key="i" :data-index="i" :class="['whitespace-nowrap py-2 px-[10px] rounded-[3px]', modelValue == i ? 'bg-[#1DA958] text-white' : 'bg-[#D2EEDE]']">
            {{ typeof choice === "object" ? choice.label : choice }}
        </button>
    </div>

    <div v-else :class="['choices no-scroll-thum overflow-x-scroll', $attrs.class]">
        <header class="flex gap-[30px] border-b-[2px] border-dotted text-[15px] leading-[18px] font-[Inter]" @click="handle">
            <button v-for="(choice, i) in choices" :key="i" :data-index="i" :class="[modelValue == i ? 'selected font-medium text-[#131313]' : 'font-normal text-[#878787]', 'pb-[13px] whitespace-nowrap']">
                {{ typeof choice === "object" ? choice.label : choice }}
            </button>
        </header>
    </div>
</template>

<style lang="scss" scoped>
.choices {
    header {
        min-width: fit-content;
    }

    button.selected {
        position: relative;
        &::after {
            content: " ";
            z-index: 1;
            background-color: #1da958;
            padding: 1px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            border-radius: 3px;
        }
    }
}
</style>
