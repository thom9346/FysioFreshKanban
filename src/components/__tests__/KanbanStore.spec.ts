import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useKanbanStore } from '@/stores/kanban';

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
});
