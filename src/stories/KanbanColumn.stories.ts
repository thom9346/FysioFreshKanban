import type { Meta, StoryObj } from '@storybook/vue3';
import KanbanColumn from '../components/KanbanColumn.vue';

const meta: Meta<typeof KanbanColumn> = {
  title: 'KanbanColumn',
  component: KanbanColumn,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<div style="margin: 3em;"><story /></div>',
    })
  ],
};

export default meta;
type Story = StoryObj<typeof KanbanColumn>;

export const EmptyColumn: Story = {
  args: {
    column: {
      name: 'Todo',
      cards: []
    }
  },
};

export const ColumnWithCards: Story = {
  args: {
    column: {
      name: 'In Progress',
      cards: [
        { id: '1', title: 'Task 1', description: 'Description for task 1' },
        { id: '2', title: 'Task 2', description: 'Description for task 2' },
        { id: '3', title: 'Task 3', description: 'Description for task 3' },
      ]
    }
  },
};

export const ColumnWithManyCards: Story = {
  args: {
    column: {
      name: 'Done',
      cards: Array.from({ length: 10 }, (_, i) => ({
        id: `${i + 1}`,
        title: `Completed Task ${i + 1}`,
        description: `This is a completed task number ${i + 1}`
      }))
    }
  },
};