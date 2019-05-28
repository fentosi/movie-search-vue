import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchForm from '@/components/SearchForm.vue'
import sinon from 'sinon'
import movieRepository from '../../src/repositories/movieRepository'
import Vuex from 'vuex'

const chai = require('chai')
const expect = chai.expect
const searchTerm = 'marvel'

const localVue = createLocalVue()
localVue.use(Vuex)

const mockStore = { dispatch: sinon.spy() }

describe('SearchForm.vue', () => {
  let movieRepositorySearchStub
  let alertFn = sinon.stub(global, 'alert')

  beforeEach(() => {
    global.window = { alert: alertFn }

    movieRepositorySearchStub = sinon.stub(movieRepository, 'search').resolves({ data: { Search: [] } })
  })

  afterEach(() => {
    movieRepository.search.restore()
  })

  it('has a submit button', () => {
    const wrapper = shallowMount(SearchForm)
    expect(wrapper.contains('input[type=submit]')).to.equal(true)
  })

  it('has an input', () => {
    const wrapper = shallowMount(SearchForm)
    expect(wrapper.contains('input[type=text]')).to.equal(true)
  })

  it('changing input value changes model value', () => {
    const wrapper = shallowMount(SearchForm)
    const input = wrapper.find('input[type=text]')
    const value = 'test value'

    wrapper.setData({ searchTerm: 'some value' })

    input.element.value = value
    input.trigger('input')
    expect(wrapper.vm.searchTerm).to.be.equal(value)
  })

  it('submitting form calls search method', () => {
    const searchStub = sinon.stub()
    const wrapper = shallowMount(SearchForm)
    const form = wrapper.find('form')

    wrapper.setMethods({ search: searchStub })
    form.trigger('submit')

    expect(searchStub.called).to.be.equal(true)
  })

  it('submitting form without a value does not call movieRepository search', () => {
    const wrapper = shallowMount(SearchForm)
    const form = wrapper.find('form')

    form.trigger('submit')

    expect(movieRepositorySearchStub.called).to.be.equal(false)
  })

  it('submitting form with value calls movieRepository search', () => {
    const wrapper = shallowMount(SearchForm, {
      mocks: {
        $store: mockStore
      }
    })
    const form = wrapper.find('form')

    wrapper.vm.searchTerm = searchTerm

    form.trigger('submit')

    expect(movieRepositorySearchStub.called).to.be.equal(true)
  })

  it('submitting form calls movieRepository search with given searchTerm', () => {
    const wrapper = shallowMount(SearchForm, {
      mocks: {
        $store: mockStore
      }
    })
    const form = wrapper.find('form')

    wrapper.vm.searchTerm = searchTerm

    form.trigger('submit')

    expect(movieRepositorySearchStub.called).to.be.equal(true)
    expect(movieRepositorySearchStub.calledWith(searchTerm)).to.be.equal(true)
  })

  it('submitting form calls "updateMovies" on $store with correct attributes', async () => {
    const wrapper = shallowMount(SearchForm, {
      mocks: {
        $store: mockStore
      }
    })
    const form = wrapper.find('form')

    wrapper.vm.searchTerm = searchTerm

    form.trigger('submit')

    await wrapper.vm.$nextTick()

    expect(mockStore.dispatch.called).to.be.equal(true)
    expect(mockStore.dispatch.calledWith('updateMovies')).to.be.equal(true)
    expect(mockStore.dispatch.calledWith('updateMovies', [])).to.be.equal(true)
  })

  it('submitting form throws alert if the moveRepository service throws error', async () => {
    movieRepository.search.restore()
    sinon.stub(movieRepository, 'search').rejects('error')
    const wrapper = shallowMount(SearchForm)
    const form = wrapper.find('form')
    wrapper.vm.searchTerm = searchTerm
    form.trigger('submit')

    await wrapper.vm.$nextTick()

    expect(alertFn.called).to.be.equal(true)
  })
})
