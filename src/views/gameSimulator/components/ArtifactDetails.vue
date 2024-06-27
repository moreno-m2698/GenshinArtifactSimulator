<script setup lang="ts">
import type { Artifact } from '@/utilities/types/types';

const props = defineProps<{
  artifact: Artifact;
}>();
</script>

<template>
  <div v-if="artifact">
    <h2>Artifact Details</h2>
    <img :src="artifact.src" alt="Artifact Image" />
    <pre>{{ artifact }}</pre>
  </div>
</template>