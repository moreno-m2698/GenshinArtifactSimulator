<script setup lang="ts">
import type { Artifact } from '../../../utilities/types/artifactTypes';

const props = defineProps<{
  artifact: Artifact | null;
}>();
</script>

<template>
  <div v-if="artifact">
    <h2>Artifact Details</h2>
    <img :src="artifact.asset.src" alt="Artifact Image" />
    <pre>{{ artifact }}</pre>
  </div>
</template>