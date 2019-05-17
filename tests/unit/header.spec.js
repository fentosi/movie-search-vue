import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import SearchForm from '@/components/SearchForm.vue'

describe('Header.vue', () => {
  it('has a search form', () => {
    const wrapper = mount(Header)
    expect(wrapper.contains(SearchForm)).to.equal(true)
  })
})
