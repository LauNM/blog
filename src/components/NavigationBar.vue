<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <button class="burger-menu" :class="{ 'navbar-open': !hidden }" @click="hidden  ? hidden = false : hidden  = true">
    -
    -
    -
  </button>
  <nav class="navbar" :class="{ 'responsive-navbar-hidden': hidden }">
    <RouterLink @click="hidden = true" to="/">Histoire</RouterLink>
    <RouterLink @click="hidden = true" to="/themes">Les thèmes</RouterLink>
    <RouterLink @click="hidden = true" to="/posts">Tous les articles</RouterLink>
    <RouterLink @click="hidden = true" to="/contact">Contact</RouterLink>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      hidden: true,
    }
  }
}

</script>

<style lang="scss" scoped>
  .burger-menu {
    position: absolute;
    right: 1rem;
    top: 1rem;
    display: none;
    border-style: none;
    border-radius: 0.5rem;
    background-color: #5C7289;
    padding: 1rem;
    color: #E6EDEE;
    cursor: pointer;
    margin: 0;
    @media only screen and (max-width: 600px) {
      display: block;
      &.navbar-open {
        background-color: #E6EDEE;
        color: #5C7289;
      }
    }
  }
  .navbar {
    display: flex;
    justify-content: space-evenly;
    border-style: none;
    border-radius: 0.5rem;
    background-color: #5C7289;
    padding: 1rem;
    font-size: 1.67rem;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      padding-right: 5rem;
      &.responsive-navbar-hidden {
        display: none;
      }
    }
    a {
      text-decoration: none;
      color: #E6EDEE;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      &.router-link-active {
        background-color: #E6EDEE;
        color: #5C7289;
      }
    }
  }
</style>
