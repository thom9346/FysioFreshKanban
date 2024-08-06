import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import KanbanCard from '../KanbanCard.vue'

describe('KanbanCard', () => {
  const mockCard = {
    id: '1',
    title: 'Test Card',
    description: 'This is a test card'
  }

  it('renders the card title and description', () => {
    const wrapper = mount(KanbanCard, {
      props: {
        card: mockCard
      }
    })

    expect(wrapper.text()).toContain('Test Card')
    expect(wrapper.text()).toContain('This is a test card')
  })

  it('emits delete event when delete button is clicked', async () => {
    const wrapper = mount(KanbanCard, {
      props: {
        card: mockCard
      }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('delete')
    expect(wrapper.emitted().delete[0]).toEqual([mockCard.id])
  })
})
