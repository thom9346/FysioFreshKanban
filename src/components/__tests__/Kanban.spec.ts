import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useKanbanStore } from '../../stores/kanban'

describe('Kanban Store', () => {

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  // it('moves a card from one column to another', () => {
  //   const store = useKanbanStore()
  //   const cardToMove = store.columns[0].cards[0]
  //   store.moveCard('Todo', 'Done', cardToMove)
  //   expect(store.columns[0].cards).toHaveLength(0)
  //   expect(store.columns[2].cards).toContain(cardToMove)
  // })

//   it('adds a new card to a column', () => {
//     const store = useKanbanStore()
//     const newCard = { id: 4, title: 'New Task', description: 'New task description' }
//     store.addCard('Todo', newCard)
//     expect(store.columns[0].cards).toContain(newCard)
//   })
})
