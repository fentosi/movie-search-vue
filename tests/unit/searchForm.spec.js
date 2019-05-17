import { mount } from '@vue/test-utils'
import SearchForm from '@/components/SearchForm.vue'
import sinon from 'sinon'

const chai = require('chai')
const expect = chai.expect

describe('SearchForm.vue', () => {
  it('has a button', () => {
    const wrapper = mount(SearchForm)
    expect(wrapper.contains('button')).to.equal(true)
  })

  it('has an input', () => {
    const wrapper = mount(SearchForm)
    expect(wrapper.contains('input[type=text]')).to.equal(true)
  })

  it('changing input value changes model value', () => {
    const wrapper = mount(SearchForm)
    const input = wrapper.find('input[type=text]')
    const value = 'test value'

    wrapper.setData({ searchTerm: 'some value' })

    input.element.value = value
    input.trigger('input')
    expect(wrapper.vm.searchTerm).to.be.equal(value)
  })

  it('submitting form with value calls search', () => {
    const searchStub = sinon.stub()
    const wrapper = mount(SearchForm)
    const button = wrapper.find('button')

    wrapper.setMethods({ search: searchStub })
    button.trigger('click')

    expect(searchStub.called).to.be.equal(true)
  })
})
