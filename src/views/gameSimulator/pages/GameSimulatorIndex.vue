
<script setup lang="ts">
import { ref, reactive } from 'vue';
import ArtifactRoller from '../components/ArtifactRoller.vue';
import ArtifactBag from '../components/ArtifactBag.vue';
import ArtifactDetails from '../components/ArtifactDetails.vue';
import DomainForm from '../components/DomainForm/DomainForm.vue';
import type { Artifact } from '@/types/types';
import { type Domain, domains } from '../../../types/domain'

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
    <ArtifactBag :artifacts="artifacts" @artifact-selected="selectArtifact" />
    <ArtifactDetails :artifact="selectedArtifact" />
    
  </div>
</template>