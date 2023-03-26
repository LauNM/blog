<template>
  <h2 class="main-title">{{ post.title }}</h2>
  <p>Par: {{post.author}}, le {{post.createdAt}}</p>
  <div>{{post.content}}</div>
</template>

<script>
import { useRoute } from 'vue-router';
import BackendConnector from "@/plugins/backend-connector";
export default {
  name: "post",
  data() {
    return {
      post: {},
      id: null,
    };
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.getPost();
  },
  methods: {
    getPost() {
      BackendConnector.get(`/posts/${this.id}`)
          .then(response => this.post = response.data[0])
          .catch(error => console.log(error));
    }
  }
}
</script>

<style scoped>

</style>
