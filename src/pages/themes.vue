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
  watch: {
    filters(newFilters, oldFilters) {
      if (newFilters !== oldFilters) {
        this.getPosts();
      }
    }
  },
  computed: {
    filters() {
      const route = this.$route.fullPath.split('?')[1] ?? null;
      return route ? `?${route}` : '';
    }
  },
  methods: {
    getThemes() {
      BackendConnector.get(`/theme${this.filters}`)
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