<script setup lang="ts">
import { ref } from 'vue';
import { generateArtifact } from '../services/artifactService';
import type { Artifact } from '@/types/types';

const artifact = ref<Artifact | null>(null);

const emit = defineEmits<{
  (e: 'artifact-created', artifact: Artifact): void;
}>();

const createArtifact = () => {
  artifact.value = generateArtifact();
  if (artifact.value) {
    emit('artifact-created', artifact.value);
  }
};
</script>

<template>
  <div>
    <h2>Create an Artifact</h2>
    <button @click="createArtifact">Create Artifact</button>
    <div v-if="artifact">
      <h3>Artifact Details:</h3>
      <!-- <pre>{{ artifact }}</pre>
      <img :src="artifact.src" alt="Artifact Image" /> -->
    </div>
  </div>
</template>