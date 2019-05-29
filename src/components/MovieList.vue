<template>
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-1" v-for="movie in movies" v-bind:key="movie.imdbID">
          <MovieListItem v-bind:movie="movie" />
        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import MovieListItem from './MovieListItem.vue'

export default {
  name: 'MovieList',
  components: {
    MovieListItem
  },
  computed: {
    movies () {
      return this.$store.getters.movies
    }
  }
}
</script>
