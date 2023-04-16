<template>
  <div v-if="isLoading">Loading</div>
  <div v-else>
    <h2 class="main-title">{{ post.title }}</h2>
    <p>Par: {{post.author}}, le {{post.createdAt}}</p>
    <div>{{post.content}}</div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import BackendConnector from "@/plugins/backend-connector";
export default {
  name: "post",
  data() {
    return {
      isLoading: false,
      post: {},
      id: null,
    };
  },
  async mounted() {
    const route = useRoute();
    console.log(route.params)
    this.id = route.params.id;
    await this.getPost();
  },
  methods: {
    async getPost() {
      this.isLoading = true;
      BackendConnector.get(`/post/${this.id}`)
        .then(response => this.post = response.data)
        .catch(error => console.log(error));
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>

</style>
