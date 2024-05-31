
<script setup lang="ts">
import { ref } from 'vue';
import ArtifactRoller from '../components/ArtifactRoller.vue';
import ArtifactInventory from '../components/ArtifactInventory.vue';
import ArtifactDetails from '../components/ArtifactDetails.vue';
import type { Artifact } from '@/types/types';

const artifacts = ref<Artifact[]>([]);
const selectedArtifact = ref<Artifact | null>(null);

const addArtifact = (artifact: Artifact) => {
  artifacts.value.push(artifact);
};

const selectArtifact = (artifact: Artifact) => {
  selectedArtifact.value = artifact;
};
</script>

<template>
  <div id="app">
    <ArtifactRoller @artifact-created="addArtifact" />
    <ArtifactInventory :artifacts="artifacts" @artifact-selected="selectArtifact" />
    <ArtifactDetails :artifact="selectedArtifact" />
  </div>
</template>