import { createLocalVue } from '@vue/test-utils'
import { expect } from 'chai'
import Vuex from 'vuex'
import storeConfig from '../../src/storeConfig.js'
import { cloneDeep } from 'lodash'

describe('store.js', () => {
  let localVue
  let store
  const data = [{}, {}, {}]

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(storeConfig))
  })

  afterEach(() => {
    store = null
    localVue = null
  })

  it('state.movies gets updated when "updateMovies" is committed', () => {
    expect(store.getters.movies.length).to.be.equal(0)
    store.commit('updateMovies', data)
    expect(store.getters.movies.length).to.be.equal(3)
  })
})
