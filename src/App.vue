<template>
  <SearchInput />
</template>

<script>
import SearchInput from '@/components/SearchInput.vue'
export default {
  name: 'App',
  components: {
    SearchInput
  }
}
</script>

<style>

#app {
  font-family: $primary-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
  margin-top: 60px;
}
</style>
