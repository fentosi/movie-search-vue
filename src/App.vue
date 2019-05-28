<template>
  <main role="main">
      <Header />

      <MoviesList />
  </main>
</template>

<script>
// @ is an alias to /src
import Header from './components/Header.vue'
import MoviesList from './components/MoviesList'

export default {
  name: 'App',
  components: {
    MoviesList,
    Header
  }
}
</script>
