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
    search: function () {
      if (!_.isEmpty(this.searchTerm)) {
        MovieRepository.search(this.searchTerm)
      }
    }
  }
}
</script>
