<template>
    <form class="form-inline mt-2 mt-md-0" @submit.prevent="search">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-model="searchTerm">
        <input type="submit" class="btn btn-primary my-2 my-sm-0" value="Search">
    </form>
</template>

<script>
import MovieRepository from '@/repositories/movieRepository.js'
import _ from 'lodash'

export default {
  name: 'SearchForm',
  data: function () {
    return {
      searchTerm: ''
    }
  },
  methods: {
    async search () {
      if (!_.isEmpty(this.searchTerm)) {
        try {
          const data = await MovieRepository.search(this.searchTerm)
          this.$store.dispatch('updateMovies', data.data.Search)
        } catch (e) {
          window.alert('The OMDB movie search service is unavailable')
        }
      }
    }
  }
}
</script>
