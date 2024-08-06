import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export interface Card {
  id: string
  title: string
  description: string
}

export interface Column {
  name: string
  cards: Card[]
}

export const useKanbanStore = defineStore('kanban', {
  state: () => ({
    columns: [
      {
        name: 'Todo',
        cards: [
          {
            id: uuidv4(),
            title: 'Finish book',
            description: 'read chapter 1-2 in some generic book'
          }
        ]
      },
      {
        name: 'In Progress',
        cards: [{ id: uuidv4(), title: 'Learn vue', description: 'its about time' }]
      },
      {
        name: 'Done',
        cards: [
          {
            id: uuidv4(),
            title: 'Lorem Ipsum',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
        ]
      }
    ] as Column[]
  }),
  actions: {
    addCard(columnName: string, title: string, description: string) {
      const column = this.columns.find((c) => c.name === columnName)
      if (!column) return

      const newCard = {
        id: uuidv4(),
        title,
        description
      }

      column.cards.push(newCard)
    },
    deleteCard(columnName: string, cardId: string) {
      const column = this.columns.find((c) => c.name === columnName)
      if (!column) return

      column.cards = column.cards.filter((card) => card.id !== cardId)
    }
  }
})
