import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useKanbanStore } from '@/stores/kanban'
import KanbanColumn from '../KanbanColumn.vue'
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
})
