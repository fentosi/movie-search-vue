import { expect } from 'chai'
import { createLocalVue, mount } from '@vue/test-utils'
import MoviesList from '../../../src/components/MovieList'
import { cloneDeep } from 'lodash'
import Vuex from 'vuex'
import storeConfig from '../../../src/storeConfig'
import Movie from '../../../src/components/MovieListItem'

describe('MoviesList.vue', () => {
  let localVue
  let store
  const movies = [
    { imdbID: 1, Title: 'Title 1', Poster: '', Year: 2019 },
    { imdbID: 2, Title: 'Title 2', Poster: '', Year: 2019 },
    { imdbID: 3, Title: 'Title 3', Poster: '', Year: 2019 }
  ]

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(storeConfig))
  })

  it('hasn\'t got "Movie" if store does not contains movie', () => {
    const component = mount(MoviesList, {
      mocks: {
        $store: store
      },
      stubs: {
        Movie: "<div class='movie'></div>"
      }
    }, localVue)

    expect(component.contains(Movie)).to.equal(false)
    expect(component.findAll('.movie').length).to.equal(0)
  })

  it('has as many "Movie" as store has', () => {
    const component = mount(MoviesList, {
      mocks: {
        $store: store
      },
      stubs: {
        Movie: "<div class='movie'></div>"
      }
    }, localVue)
    store.dispatch('updateMovies', movies)

    expect(component.contains(Movie)).to.equal(true)
    expect(component.findAll('.movie').length).to.equal(movies.length)
  })
})
