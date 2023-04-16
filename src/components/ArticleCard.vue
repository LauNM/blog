<template>
  <div class="post-card" :id="post.id">
    <h2>{{ post.title }}</h2>
    <p>{{ post.summary }}</p>
  </div>
</template>

<script>
export default {
  name: "articleCard",
  props: {
    post: {
      type: Object,
      default: () => {
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.post-card {
  background-color: #E6EDEE;
  width: 27rem;
  height: 12rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background-color: rgba(230, 237, 238, 0.50);
  }
}
</style>