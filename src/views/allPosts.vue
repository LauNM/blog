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
      filter: [],
    };
  },
  mounted() {
    this.filter = this.$route.query;
    this.formatFilters()
    this.getPosts();
  },
  methods: {
    formatFilters() {
      let string = '';
      Object.entries(this.filter).forEach((key, value) => {
        console.log(key, value);
        string.concat(`${key}=${value}`);
      })
      return string;
    },
    getPosts() {
      if (Object.keys(this.filter).length !== 0) {
        BackendConnector.get('/post/')
         .then(response => this.posts = response.data)
         .catch(error => console.log(error));
      }
      BackendConnector.get('/post')
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
