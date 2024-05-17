<template>
    <div>
      <h2>Artifact Inventory</h2>
      <ul>
        <li v-for="(artifact, index) in artifacts" :key="index">
          {{ artifact }}
          <img :src="artifact.src" alt="Artifact Image" />
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import type { Artifact } from '@/types/types';
  
  export default defineComponent({
    name: 'ArtifactInventory',
    props: {
      artifacts: {
        type: Array as PropType<Artifact[]>,
        required: true
      }
    }
  });
  </script>