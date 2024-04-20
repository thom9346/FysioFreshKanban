<template>
  <div class="bg-gray-100 p-4 rounded-lg shadow space-y-4 w-72 mx-2">
    <h2 class="text-xl font-bold text-center">{{ column.name }}</h2>
    <draggable
      class="space-y-2"
      v-model="column.cards"
      itemKey="id"
      group="cards"
      @end="handleDrop"
    >
      <template #item="{ element }">
        <KanbanCard :card="element" />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { type Column } from '../stores/kanban'
import draggable from 'vuedraggable'
import KanbanCard from './KanbanCard.vue'

defineProps<{
  column: Column
}>()

const handleDrop = () => {
  console.log('Dropping...')
}
</script>
