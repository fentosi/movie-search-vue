<template>
    <div class="movie">
        <h5 class="text-truncate">{{ movie.Title }}</h5>
        <div class="image">
            <img :src="movie.Poster" width="150" v-if="movie.Poster != 'N/A'">
        </div>
        <p class="text-center">{{ movie.Year }}</p>
    </div>
</template>

<style scoped>
    .image {
        height: 240px;
    }

    img {
        display: block;
        margin: 0 auto;
    }

</style>

<script>
export default {
  name: 'MovieItem',
  props: ['movie']
}
</script>
