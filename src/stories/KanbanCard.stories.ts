import type { Meta, StoryObj } from '@storybook/vue3';
import KanbanCard from '../components/KanbanCard.vue';

const meta: Meta<typeof KanbanCard> = {
  title: 'KanbanCard',
  component: KanbanCard,
  tags: ['autodocs'],
  argTypes: {
    card: { control: 'object' },
    onDelete: { action: 'deleted' }
  },
};

export default meta;
type Story = StoryObj<typeof KanbanCard>;

export const Default: Story = {
  args: {
    card: {
      id: '1',
      title: 'Example Task',
      description: 'This is an example task description'
    },
  },
};

export const LongContent: Story = {
  args: {
    card: {
      id: '2',
      title: 'A Very Long Task Title That Might Wrap',
      description: 'This is a much longer description that could potentially cause layout issues if not handled properly. It\'s important to test these edge cases. bla bla bla bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla'
    },
  },
};