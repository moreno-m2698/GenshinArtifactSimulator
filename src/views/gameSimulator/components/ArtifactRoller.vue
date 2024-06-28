<script setup lang="ts">
import { ref } from 'vue';
import { generateArtifact } from '../../../services/artifactService';
import type { Artifact } from '@/utilities/types/types';
import { type Domain, domains } from '../../../utilities/types/domain'
import DomainForm from './DomainForm.vue';

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

const domainFields = ref(domains.map((domain) => {
    return {
      label: domain.name, 
      value: false, 
      type: "radio",
      name: "domain" 
    }
  }));

</script>

<template>
  <h1>Artifact Creator</h1>
  <DomainForm v-model='domainFields'/>   
  <div>
    <button @click="createArtifact">Create Artifact</button>
  </div>
</template>