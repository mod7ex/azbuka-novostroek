<script lang="ts" setup>
const { loading, summary } = useFilterSummary();

/*
    Найдено: <b>{{ total.count_apartments.toLocaleString() }}</b>
    {{ __(total.count_apartments, ['квартира', 'квартиры', 'квартир']) }} в
    <b>{{ total.count_complexes }}</b>
    {{ __(total.count_complexes, ['жилом комплексе', 'жилых комплексах', 'жилых комплексах']) }}
*/
</script>

<template>
    <span>
        {{ loading ? "загрузка ..." : `Показать ${summary?.count_complexes ?? "_"} предложения` }}
    </span>
</template>
