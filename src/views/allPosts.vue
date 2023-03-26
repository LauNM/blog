<template>
  <h2 class="main-title">Articles</h2>
  <div class="card-wrapper">
    <Card
        v-for="post in posts"
        :key="post.id"
        :name="post.title"
        :post-id="post.id"
        :text="post.summary"
    />
  </div>
</template>

<script>
import BackendConnector from '@/plugins/backend-connector';
import Card from "../components/Card.vue";
import {useRoute} from "vue-router";
export default {
  name: "posts",
  components: {
    Card,
  },
  data() {
    return {
      posts: [],
      filter: [],
    };
  },
  mounted() {
    const route = useRoute();
    this.filter = [Object.keys(route.query), Object.values(route.query)]
    console.log(route.query);
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
