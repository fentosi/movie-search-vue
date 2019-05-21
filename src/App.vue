<template>
  <main role="main">
      <Header />

      <div class="container">
          <div class="row">
              <div class="col-md-3 col-sm-1" v-for="movie in movies" v-bind:key="movie.imdbID">
                  <MovieItem v-bind:movie="movie" />
              </div>
          </div>
      </div>
  </main>
</template>

<script>
// @ is an alias to /src
import MovieItem from '@/components/Movie.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    MovieItem,
    Header
  },
  computed: {
    movies () {
      return this.$store.getters.movies
    }
  }
}
</script>
