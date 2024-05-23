<template>
  <div v-if="artifact">
    <h2>Artifact Details</h2>
    <img :src="artifact.src" alt="Artifact Image" />
    <pre>{{ artifact }}</pre>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Artifact } from '@/types/types';

const props = defineProps<{
  artifact?: Artifact;
}>();
</script>