<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header> 
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- Leave this here for reference on lazy loading routes
        <RouterLink to="/about">About</RouterLink> -->
      </nav>
  </header>
  <RouterView />
</template>
