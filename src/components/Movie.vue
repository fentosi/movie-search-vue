<template>
    <div class="movie-item">
        <p>{{ movie.Title }}</p>
        <p>{{ movie.Year }}</p>
        <img :src="movie.Poster">
    </div>
</template>

<script>
export default {
  name: 'MovieItem',
  props: ['movie']
}
</script>
