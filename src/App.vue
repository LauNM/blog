<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <NavigationBar />
  </header>
  <main class="main-content">
    <RouterView />
  </main>
</template>

