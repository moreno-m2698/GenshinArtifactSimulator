<script setup lang="ts">
import { ref, watch } from 'vue'
import { ArtifactType } from '../enums/enums'
import flower from '../assets/img/flower.webp'
import feather from '../assets/img/feather.webp'
import timepiece from '../assets/img/timepiece.webp'
import goblet from '../assets/img/goblet.webp'
import circlet from '../assets/img/circlet.webp'
import { generateArtifact } from '../services/artifactService'

const artifact = ref()
const pressedOnce = ref(false)

function rollArtifact() {
    console.log("Created new artifact")
    const newArtifact = generateArtifact();
    artifact.value = newArtifact
    pressedOnce.value = true
}


//This implementation errors if the number rolled is the same


</script>

<template>
    <h1>Test</h1>
    <div v-if="pressedOnce">
        <img :src='artifact.src'/>
    </div>
    <p>Current Artifact: {{ artifact }}</p>
    <button @click="rollArtifact">Get Artifact</button>
    <p></p>
</template>