<template>
  <h2 class="main-title">Thèmes</h2>
  <div class="card-wrapper">
    <Card
        v-for="theme in themes"
        :key="theme.id"
        :name="theme.title"
        :theme-id="theme.id"
        :text="theme.summary"
    />
  </div>
</template>
<script>
import BackendConnector from '@/plugins/backend-connector';
import Card from "../components/Card.vue";
export default {
  name: "themes",
  components: {
    Card,
  },
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
      BackendConnector.get('/themes')
          .then(response => this.themes = response.data)
          .catch(error => console.log(error));
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
