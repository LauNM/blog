<template>
  <h2 class="main-title">{{ title }}</h2>
  <div class="card-wrapper">
    <ArticleCard
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
import Card from "@/components/Card.vue";
import ArticleCard from "@/components/ArticleCard.vue";

export default {
    name: "posts",
  components: {ArticleCard, Card}
}
</script>

<style scoped>

</style>