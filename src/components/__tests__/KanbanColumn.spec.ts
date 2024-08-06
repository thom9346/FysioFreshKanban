import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useKanbanStore } from '@/stores/kanban'
import KanbanColumn from '../KanbanColumn.vue'
import KanbanCard from '../KanbanCard.vue'
import draggable from 'vuedraggable'
import { mount } from '@vue/test-utils'

describe('KanbanColumn', () => {
  let kanbanStore: ReturnType<typeof useKanbanStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    kanbanStore = useKanbanStore()
  })

  it('renders the column name', () => {
    const wrapper = mount(KanbanColumn, {
      props: {
        column: kanbanStore.columns[0]
      }
    })

    expect(wrapper.text()).toContain('Todo')
  })
  it('renders the cards in the column', () => {
    const wrapper = mount(KanbanColumn, {
      props: {
        column: kanbanStore.columns[0]
      }
    })

    expect(wrapper.text()).toContain('Finish book')
  })
  it('renders all cards in the column', () => {
    const column = {
      name: 'Test Column',
      cards: [
        { id: '1', title: 'Card 1', description: 'Description 1' },
        { id: '2', title: 'Card 2', description: 'Description 2' }
      ]
    }
    const wrapper = mount(KanbanColumn, {
      props: { column },
      global: {
        stubs: {
          draggable: draggable
        }
      }
    })
  
    const cards = wrapper.findAllComponents(KanbanCard)
    expect(cards).toHaveLength(2)
    expect(cards[0].props('card')).toEqual(column.cards[0])
    expect(cards[1].props('card')).toEqual(column.cards[1])
  })

  it('calls deleteCard when a card emits a delete event', async () => {
    const column = {
      name: 'Test Column',
      cards: [{ id: '1', title: 'Card 1', description: 'Description 1' }]
    }
    const wrapper = mount(KanbanColumn, {
      props: { column },
      global: {
        stubs: {
          draggable: draggable
        }
      }
    })

    const deleteCardSpy = vi.spyOn(kanbanStore, 'deleteCard')
    const card = wrapper.findComponent(KanbanCard)
    await card.vm.$emit('delete', '1')

    expect(deleteCardSpy).toHaveBeenCalledWith('Test Column', '1')
  })
  it('calls updateColumnCards when cards are reordered', async () => {
    const column = {
      name: 'Test Column',
      cards: [
        { id: '1', title: 'Card 1', description: 'Description 1' },
        { id: '2', title: 'Card 2', description: 'Description 2' }
      ]
    }
    const wrapper = mount(KanbanColumn, {
      props: { column },
      global: {
        stubs: {
          draggable: draggable
        }
      }
    })
  
    const updateColumnCardsSpy = vi.spyOn(kanbanStore, 'updateColumnCards')
    const draggableComponent = wrapper.findComponent(draggable)
    
    const reorderedCards = [column.cards[1], column.cards[0]]
    await draggableComponent.vm.$emit('update:modelValue', reorderedCards)
  
    expect(updateColumnCardsSpy).toHaveBeenCalledWith(column.name, reorderedCards)
  })
})