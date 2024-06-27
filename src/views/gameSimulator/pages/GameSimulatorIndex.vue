
<script setup lang="ts">
  import { ref } from 'vue';
  import ArtifactRoller from '../components/ArtifactRoller.vue';
  import ArtifactInventory from '../components/ArtifactInventory.vue';
  import ArtifactFocus from '../components/ArtifactFocus.vue';
  import DomainForm from '../components/DomainForm.vue';
  import ArtifactEquipment from '../components/ArtifactEquipment.vue'
  import type { Artifact } from '../../../utilities/types/artifactTypes';
  import { type Domain, domains } from '../../../utilities/types/domain'

  const artifacts = ref<Artifact[]>([]);
  const selectedArtifact = ref<Artifact | null>(null);

  const domainFields = ref(domains.map((domain) => {
    return {
      label: domain.name, 
      value: false, 
      type: "radio",
      name: "domain" 
    }
  }));

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
    <ArtifactRoller @artifact-created="addArtifact" />
    <DomainForm v-model='domainFields'/>    
    <ArtifactFocus :artifact="selectedArtifact" />
    <ArtifactEquipment />
    <ArtifactInventory :artifacts="artifacts" @artifact-selected="selectArtifact" />
  </div>
</template>