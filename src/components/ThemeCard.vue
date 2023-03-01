<template>
  <div class="theme-card" @click="$router.push(`/articles/${themeId}`)">
    <p>{{ themeName }}</p>
  </div>
</template>

<script>
export default {
  name: "ThemeCard",
  props: {
    themeId: {
      type: String,
      required: true,
    },
    themeName: {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
  .theme-card {
    background-color: #E6EDEE;
    width: 27rem;
    height: 12rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: rgba(230, 237, 238, 0.50);
    }
  }
</style>
