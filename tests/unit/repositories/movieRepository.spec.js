import { expect } from 'chai'
import sinon from 'sinon'
import axios from 'axios'

import movieRepository from '@/repositories/movieRepository'

describe('movieRepository', () => {
  let axiosGetStub
  const apiKey = 'abc123'

  // before running each test, stub out `logout()`
  beforeEach(() => {
    axiosGetStub = sinon.spy(axios, 'get')
    process.env.VUE_APP_OMDB_API_KEY = apiKey
  })

  afterEach(() => {
    axios.get.restore()
  })

  it('search calls the api', () => {
    movieRepository.search()
    expect(axiosGetStub.called).to.be.equal(true)
  })

  it('search calls the api with the apiKey param', () => {
    const searchTerm = 'marvel'
    movieRepository.search(searchTerm)

    const callParams = axiosGetStub.args[0][1].params

    expect(axiosGetStub.called).to.be.equal(true)
    expect(callParams.hasOwnProperty('apiKey')).to.be.equal(true)
  })
})
