<template>
    <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-model="searchTerm">
        <button class="btn btn-primary my-2 my-sm-0" v-on:click="search">Search</button>
    </form>
</template>

<script>
import MovieRepository from '@/repositories/movieRepository.js'

export default {
  name: 'SearchForm',
  data: function () {
    return {
      searchTerm: ''
    }
  },
  methods: {
    search: function () {
      MovieRepository.search(this.searchTerm)
    }
  }
}
</script>
