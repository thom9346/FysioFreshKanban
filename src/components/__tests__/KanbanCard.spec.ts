import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import KanbanCard from '../../components/KanbanCard.vue'
import { v4 as uuidv4 } from 'uuid'

describe('KanbanCard', () => {
  it('renders card content', () => {
    const card = { id: uuidv4(), title: 'Test Card', description: 'Test Description' }
    const wrapper = mount(KanbanCard, {
      props: {
        card
      }
    })
    expect(wrapper.text()).toContain('Test Card')
    expect(wrapper.text()).toContain('Test Description')
  })
})
