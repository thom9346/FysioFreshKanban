import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import KanbanColumn from '../../components/KanbanColumn.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('KanbanColumn', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders column title', () => {
    const wrapper = mount(KanbanColumn, {
      props: {
        column: {
          name: 'Test Column',
          cards: []
        }
      }
    })
    expect(wrapper.text()).toContain('Test Column')
  })

})
