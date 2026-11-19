import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ModuleCard from '../app/components/ModuleCard.vue'

describe('ModuleCard (Nuxt-Umgebung)', () => {
  it('verlinkt auf die Detailseite des Moduls', async () => {
    const wrapper = await mountSuspended(ModuleCard, {
      props: {
        id: 2,
        title: 'Webtechnologien',
        ects: 5,
        lecturer: 'Prof. Dr. Arif Wider'
      }
    })

    expect(wrapper.text()).toContain('Webtechnologien')
    expect(wrapper.find('a').attributes('href')).toBe('/modules/2')
  })
})
