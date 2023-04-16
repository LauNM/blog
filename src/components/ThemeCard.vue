<template>
  <div class="theme-card" :id="theme.id">
    <h2>{{ theme.title }}</h2>
  </div>
</template>

<script>
export default {
  name: "ThemeCard",
  props: {
    theme: {
      type: Object,
      default: () => {},
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