<script setup lang="ts">
    import { type Domain } from '../../types/domain';
    
    const props = defineProps<{
        domain: Domain,
        index: number;
    }>();
</script>

<template>
    <input type="radio" :id="index.toString()" :value="index">
    <label :for="index.toString()">{{ domain.name }}</label>
</template>