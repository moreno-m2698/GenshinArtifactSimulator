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
  artifact.value = generateArtifact(selectOption.value);
  if (artifact.value) {
    emit('artifact-created', artifact.value);
  }
};

const selectOption = ref(0)
const resinType = ref("fragile")
</script>


<template>
  <h1>Artifact Creator</h1>
  <form @submit.prevent>
    <select 
      name="domain" 
      id="domain-select"
      v-model.number="selectOption"
    > 
      <option value="0">
        --Select--
      </option>
      <option
        v-for="(domain, index) in domains"
        :value="index + 1"
      >
        {{ domain.name }}
      </option>
    </select>
    {{ selectOption }}
    <label>
      <input type="radio" v-model="resinType" value="fragile">
      Fragile Resin
    </label>
    <label>
      <input type="radio" v-model="resinType" value="condensed">
      Condensed Resin
    </label>
    <br />
    {{ resinType }}
    <button @click="createArtifact">Create Artifact</button>
  </form>
</template>