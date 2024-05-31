<script setup lang="ts">
import type { Artifact } from '@/types/types';

const props = defineProps<{
  artifacts: Artifact[];
}>();

const emit = defineEmits<{
  (e: 'artifact-selected', artifact: Artifact): void;
}>();

const selectArtifact = (artifact: Artifact) => {
  emit('artifact-selected', artifact);
};
</script>

<template>
  <div>
    <h2>Artifact Inventory</h2>
    <ul>
      <li v-for="(artifact, index) in artifacts" :key="index" @click="selectArtifact(artifact)">
        <img :src="artifact.src" alt="Artifact Image" />
      </li>
    </ul>
  </div>
</template>
