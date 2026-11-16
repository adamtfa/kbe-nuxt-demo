import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ModuleCard from '../app/components/ModuleCard.vue'

describe('ModuleCard', () => {
  it('zeigt Modultitel und ECTS korrekt an', () => {
    const wrapper = mount(ModuleCard, {
      props: {
        id: 1,
        title: 'Komponentenbasierte Entwicklung',
        ects: 5,
        lecturer: 'M.Sc. Eyad Wahdan'
      },
      global: {
        stubs: { NuxtLink: true }
      }
    })

    expect(wrapper.text()).toContain('Komponentenbasierte Entwicklung')
    expect(wrapper.text()).toContain('5 ECTS')
  })
})