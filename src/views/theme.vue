<template>
    <div v-if="isLoading">Loading</div>
    <div v-else>
        <h2 class="main-title">{{ title }}</h2>
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
    </div>
</template>
<script>
import BackendConnector from '@/plugins/backend-connector';
import Card from "../components/Card.vue";
import {useRoute} from "vue-router";

export default {
    name: "theme",
    components: {
        Card,
    },
    data() {
        return {
            posts: [],
            theme: null,
            id: null,
            title: null,
            isLoading: false,
        };
    },
    async mounted() {
        const route = useRoute();
        this.id = route.params.id;
        this.title = route.params.title
        await this.getPosts();
    },
    methods: {
        async getPosts() {
            this.isLoading = true;
            BackendConnector.get(`/post?theme=${this.id}`)
                .then(response => this.posts = response.data)
                .catch(error => console.log(error));
            this.isLoading = false;
        },
        goToPost(id) {
            this.$router.push(`/posts/${id}`)
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
