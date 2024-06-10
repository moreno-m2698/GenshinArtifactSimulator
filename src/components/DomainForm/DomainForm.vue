<script setup lang="ts">
import { domains } from "../../types/domain.js"
import DomainRadio from "./DomainRadio.vue";
console.log(domains)

</script>

<template>
    <form>
        <DomainRadio v-for="(domain, index) in domains" :key="index" :domain="domain" :index="index"/>
    </form>
</template>