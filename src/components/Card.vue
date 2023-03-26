<template>
  <div class="theme-card" @click="$router.push(link)">
    <h2>{{ name }}</h2>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    themeId: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    postId: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    }
  },
  computed: {
    link() {
      if (this.themeId !== null) {
        return `/posts/${this.themeId}`;
      }
      if (this.postId !== null) {
        return `/post/${this.postId}`;
      }
      return null;
    }
  }
}
</script>

<style lang="scss" scoped>
  .theme-card {
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
