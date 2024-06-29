<script setup lang="ts">
import { ref } from 'vue';
import { generateArtifact } from '../../../services/artifactService';
import type { Artifact } from '../../../utilities/types/artifactTypes'
import { type Domain, domains } from '../../../utilities/types/domain'

const artifact = ref<Artifact|null>(null);

const emit = defineEmits<{
  (e: 'artifact-created', artifact: Artifact): void;
}>();

const createArtifact = () => {
  artifact.value = generateArtifact();
  if (artifact.value) {
    emit('artifact-created', artifact.value);
  }
};
</script>

<template>
  <h1>Artifact Creator</h1>
  <form>
    <select 
      name="domain" 
      id="domain-select"
    > 
      <option value="">
        --Select--
      </option>
      <option
        v-for="(domain, index) in domains"
        value="index"
      >
        {{ domain.name }}
      </option>
    </select>
    <button @click="createArtifact">Create Artifact</button>
    <input>
  </form>
</template>