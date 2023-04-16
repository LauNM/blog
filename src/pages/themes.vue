<template>
  <h2 class="main-title">Thèmes</h2>
  <div class="card-wrapper">
    <ThemeCard
      v-for="theme in themes"
      :key="theme.id"
      :theme="theme"
      @click="goToTheme(theme)"
    />
  </div>
</template>

<script>
import BackendConnector from "@/plugins/backend-connector";
import ThemeCard from "@/components/ThemeCard.vue";

export default {
    name: "themes",
  components: {ThemeCard},
  data() {
    return {
      themes: [],
    };
  },
  mounted() {
    this.getThemes();
  },
  methods: {
    getThemes() {
      BackendConnector.get('/theme')
        .then(response => this.themes = response.data)
        .catch(error => console.log(error));
    },
    goToTheme(theme) {
      this.$router.push(`/posts?theme=${theme.id}`)
    }
  },
}
</script>

<style scoped>

</style>