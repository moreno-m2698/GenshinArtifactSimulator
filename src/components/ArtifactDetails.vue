<template>
    <div v-if="artifact">
      <h2>Artifact Detail</h2>
      <img :src="artifact.src" alt="Artifact Image" />
      <pre>{{ artifact }}</pre>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  import type { Artifact } from '../types/types';
  
  export default defineComponent({
    name: 'ArtifactDetails',
    props: {
      artifact: {
        type: Object as PropType<Artifact>,
        required: false
      }
    }
  });
  </script>