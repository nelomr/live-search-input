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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2B2B2B;
  margin-top: 60px;
}
</style>
