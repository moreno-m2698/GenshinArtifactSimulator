<template>
    <div>
      <h2>Create an Artifact</h2>
      <button @click="createArtifact">Create Artifact</button>
      <div v-if="artifact">
        <h3>Artifact Details:</h3>
        <pre>{{ artifact }}</pre>
        <img :src="artifact.src" alt="Artifact Image" />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { generateArtifact } from '../services/artifactService';
  import type { Artifact } from '@/types/types';
  
  export default defineComponent({
    name: 'ArtifactRoller',
    setup(props, { emit }) {
      const artifact = ref<Artifact | null>(null);
  
      const createArtifact = () => {
        artifact.value = generateArtifact();
        if (artifact.value) {
        emit('artifact-created', artifact.value);
        }
      };
  
      return {
        artifact,
        createArtifact
      };
    }
  });
  </script>
  