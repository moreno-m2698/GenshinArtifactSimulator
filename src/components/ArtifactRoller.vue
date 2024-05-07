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


function rollArtifact() {
    "Created new artifact"
    const newArtifact = generateArtifact();
    artifact.value = newArtifact

}


//This implementation errors if the number rolled is the same


</script>

<template>
    <h1>Test</h1>
    <div>
        <!-- <img :src='currentArtifact.src'/> -->
    </div>
    <p>Current Artifact: {{ artifact }}</p>
    <button @click="rollArtifact">Get Artifact</button>
    <p></p>
</template>