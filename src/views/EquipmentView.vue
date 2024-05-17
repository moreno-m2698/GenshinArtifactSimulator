<template>
  <div id="app">
    <ArtifactRoller @artifact-created="addArtifact" />
    <ArtifactInventory :artifacts="artifacts" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ArtifactRoller from '../components/ArtifactRoller.vue';
import ArtifactInventory from '../components/ArtifactInventory.vue';
import type { Artifact } from '@/types/types';


export default defineComponent({
  name: 'App',
  components: {
    ArtifactRoller,
    ArtifactInventory
  },
  setup() {
    const artifacts = ref<Artifact[]>([]);

    const addArtifact = (artifact: Artifact) => {
      artifacts.value.push(artifact);
    };

    return {
      artifacts,
      addArtifact
    };
  }
});
</script>
