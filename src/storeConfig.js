export default {
  state: {
    movies: []
  },
  getters: {
    movies: state => state.movies
  },
  mutations: {
    updateMovies (state, movies) {
      state.movies = movies
    }
  },
  actions: {
    updateMovies (store, data) {
      store.commit('updateMovies', data)
    }
  }
}
