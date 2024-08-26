import { mount } from '@vue/test-utils'
import MusicCard from './index.vue'
import { describe, it, expect } from '@jest/globals'

describe('MusicCard', () => {
  const props = {
    detail: {
      artistName: 'Artist Name',
      trackName: 'Track Name',
      primaryGenreName: 'Genre',
      trackPrice: 9.99,
      artworkUrl100: 'https://example.com/image.png',
    },
  }

  it('renders artist name and track name', () => {
    const wrapper = mount(MusicCard, { props })
    expect(wrapper.find('h3').text()).toBe('Artist Name')
    expect(wrapper.find('h4').text()).toBe('Track Name')
  })

  it('renders genre and price correctly', () => {
    const wrapper = mount(MusicCard, { props })
    expect(wrapper.findComponent({ name: 'ElTag' }).text()).toBe('Genre')
    expect(wrapper.find('.price span').text()).toBe('9.99')
  })

  it('renders fallback values when props are not provided', () => {
    const wrapper = mount(MusicCard, { props: { detail: {} as any } })
    expect(wrapper.find('h3').text()).toBe('-')
    expect(wrapper.find('h4').text()).toBe('-')
    expect(wrapper.findComponent({ name: 'ElTag' }).text()).toBe('-')
    expect(wrapper.find('.price span').text()).toBe('-')
  })
})
