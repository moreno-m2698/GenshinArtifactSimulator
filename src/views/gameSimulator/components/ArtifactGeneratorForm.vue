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
const trialRuns = ref(1)
</script>


<template>
  <h1>Artifact Creator</h1>
  <form 
    @submit.prevent
  >
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
    <br/>
    <label>
      Fragile Resin
      <input type="radio" v-model="resinType" value="fragile">
    </label>
    <br/>
    <label>
      Condensed Resin
      <input type="radio" v-model="resinType" value="condensed">
    </label>
    <br />    
    <p>Resin type: {{ resinType }}</p>
    <label>
      Trial Runs
      <input 
        type="range" 
        id="amount" 
        name="Trial attempts"
        min="1"
        max="5"
        step="1"
        value="1"
        v-model.number="trialRuns"
      >
    </label>
    <br/>
    <p>Amount of runs: {{ trialRuns }}</p>
    <!-- When a single button is in a form it default acts like a submit input -->
    <button @click="createArtifact">Create Artifact</button> 
  </form>
</template>