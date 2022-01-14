import { beforeEach, describe, expect, test } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import Counter from './counter.vue'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

// you don't need to create one app per test
const app = createApp({})

describe('Counter component', async () => {
  beforeEach(() => {
    const pinia = createPinia()
    app.use(pinia)
    setActivePinia(pinia)
  })

  test('should mount the component', async () => {
    expect(Counter).toBeTruthy()

    const wrapper = mount(Counter)

    expect(wrapper.get('h1').text()).toContain('Simple Counter Test')
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should update counter text on button click', async () => {
    const wrapper = mount(Counter)

    expect(wrapper.get('span.count').text()).toContain(0)

    await wrapper.get('button').trigger('click')

    expect(wrapper.get('span.count').text()).toContain(1)
  })
})
