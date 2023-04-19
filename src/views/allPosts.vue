<template>
  <h2 class="main-title">Articles</h2>
  <div class="card-wrapper">
    <Card
        v-for="post in posts"
        :key="post.id"
        :name="post.title"
        :post-id="post.id"
        :text="post.summary"
        @click="goToPost(post.id)"
    />
  </div>
</template>

<script>
import BackendConnector from '@/plugins/backend-connector';
import Card from "../components/Card.vue";
export default {
  name: "posts",
  components: {
    Card,
  },
  data() {
    return {
      posts: [],
      id: null,
    };
  },
  mounted() {
    this.getPosts();
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
    getPosts() {
      BackendConnector.get(`/post${this.filters}`)
          .then(response => this.posts = response.data)
          .catch(error => console.log(error));
    },
    goToPost(id) {
      this.$router.push(`/posts/${id}`)
    }
  },
}
</script>

<style scoped>

</style>
