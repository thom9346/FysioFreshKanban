import KanbanColumn from '@/components/KanbanColumn.vue';
import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useKanbanStore } from '@/stores/kanban';
import { mount } from '@vue/test-utils'

describe('KanbanStore', () => {
  let kanbanStore: ReturnType<typeof useKanbanStore>;;

  beforeEach(() => {
    setActivePinia(createPinia());
    kanbanStore = useKanbanStore();
  });

  it('has Todo, In Progress, and Done columns', () => {
    const columnNames = kanbanStore.columns.map(column => column.name);
    expect(columnNames).toContain('Todo');
    expect(columnNames).toContain('In Progress');
    expect(columnNames).toContain('Done');
  });

  it('adds a card to a column', () => {
    const testCard = {
      title: 'New Card',
      description: 'New card description'
    };
    const todoColumn = kanbanStore.columns.find(column => column.name === 'Todo');

    kanbanStore.addCard('Todo', testCard.title, testCard.description);
    
    expect(todoColumn?.cards).toContainEqual(expect.objectContaining({
      title: testCard.title,
      description: testCard.description
    }));
  });

  it('deletes a card from a column', () => {
    const todoColumn = kanbanStore.columns.find(column => column.name === 'Todo');
    const initialCardCount = todoColumn?.cards.length || 0;
    const cardToDelete = todoColumn?.cards[0];

    if (cardToDelete) {
      kanbanStore.deleteCard('Todo', cardToDelete.id);
      
      expect(todoColumn?.cards.length).toBe(initialCardCount - 1);
      expect(todoColumn?.cards).not.toContainEqual(expect.objectContaining({
        id: cardToDelete.id
      }));
    }
  });

  it('updates cards in a column', () => {
    const newCards = [
      { id: '1', title: 'New Card 1', description: 'Description 1' },
      { id: '2', title: 'New Card 2', description: 'Description 2' }
    ];

    kanbanStore.updateColumnCards('Todo', newCards);

    const todoColumn = kanbanStore.columns.find(column => column.name === 'Todo');
    expect(todoColumn?.cards).toEqual(newCards);
  });
});