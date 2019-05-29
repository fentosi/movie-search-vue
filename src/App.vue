<template>
  <main role="main">
      <Header />

      <MovieList />
  </main>
</template>

<script>
// @ is an alias to /src
import Header from './components/Header.vue'
import MovieList from './components/MovieList'

export default {
  name: 'App',
  components: {
    MovieList,
    Header
  }
}
</script>
