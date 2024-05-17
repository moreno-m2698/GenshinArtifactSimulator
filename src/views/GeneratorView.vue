<template>
  <div id="app">
    <ArtifactRoller @artifact-created="addArtifact" />
    <ArtifactInventory :artifacts="artifacts" @artifact-selected="selectArtifact" />
    <ArtifactDetails :artifact="selectedArtifact" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ArtifactRoller from '../components/ArtifactRoller.vue';
import ArtifactInventory from '../components/ArtifactInventory.vue';
import ArtifactDetails from '../components/ArtifactDetails.vue'
import type { Artifact } from '@/types/types';


export default defineComponent({
  name: 'App',
  components: {
    ArtifactRoller,
    ArtifactInventory,
    ArtifactDetails
  },
  setup() {
    const artifacts = ref<Artifact[]>([]);
    const selectedArtifact = ref<Artifact | null>(null);

    const addArtifact = (artifact: Artifact) => {
      artifacts.value.push(artifact);
    };

    const selectArtifact = (artifact: Artifact) => {
      selectedArtifact.value = artifact;
    };

    return {
      artifacts,
      selectedArtifact,
      addArtifact,
      selectArtifact
    };
  }
});
</script>
