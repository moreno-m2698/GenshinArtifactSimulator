
<script setup lang="ts">
  import { ref } from 'vue';
  import ArtifactGeneratorForm from '../components/ArtifactGeneratorForm.vue';
  import ArtifactInventory from '../components/ArtifactInventory.vue';
  import ArtifactFocus from '../components/ArtifactFocus.vue';
  import ArtifactEquipment from '../components/ArtifactEquipment.vue'
  import { type Artifact, ArtifactType } from '../../../utilities/types/artifactTypes';


  const artifacts = ref<Artifact[]>([]);
  const selectedArtifact = ref<Artifact | null>(null);

  const selectedType = ref<ArtifactType | null>(null)

  

  // console.log(domainFields.value)

  const addArtifact = (artifact: Artifact) => {
    artifacts.value.push(artifact);
  };

  const selectArtifact = (artifact: Artifact) => {
    selectedArtifact.value = artifact;
  };
</script>

<template>
  <div id="app">
    <ArtifactFocus :artifact="selectedArtifact" />
    <ArtifactEquipment />
    <ArtifactInventory :artifacts="artifacts" @artifact-selected="selectArtifact" />
    <ArtifactGeneratorForm @artifact-created="addArtifact" />
  </div>
</template>