<template>
  <div class="flex flex-col md:flex-row justify-around items-start p-4 mx-2 gap-4">
    <KanbanColumn
      v-for="column in columns"
      :key="column.name"
      :column="column"
      class="w-full md:w-1/3"
    />
  </div>
</template>

<script setup lang="ts">
import KanbanColumn from './KanbanColumn.vue'
import { useKanbanStore } from '../stores/kanban'
const { columns } = useKanbanStore()
</script>
