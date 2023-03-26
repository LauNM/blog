<template>
  <h2 class="main-title">Articles</h2>
  <Card
      v-for="post in posts"
      :key="post.id"
      :name="post.title"
      :post-id="post.id"
      :text="post.summary"
  />
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
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      BackendConnector.get('/posts')
          .then(response => this.posts = response.data)
          .catch(error => console.log(error));
    },
  },
}
</script>

<style scoped>

</style>
