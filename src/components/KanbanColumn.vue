<template>
  <div class="p-4 rounded-lg shadow space-y-4 w-72 mx-2" style="background-color: #ffecbe">
    <h2 class="text-xl font-bold text-center">{{ column.name }}</h2>
    <draggable v-if="!disableDrag" class="space-y-2" v-model="columnCards" itemKey="id" group="cards">
      <template #item="{ element }">
        <KanbanCard :card="element" @delete="deleteCard" />
      </template>
    </draggable>
    <div v-else class="space-y-2">
      <KanbanCard v-for="card in column.cards" :key="card.id" :card="card" @delete="deleteCard" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { type Column } from '../stores/kanban'
import draggable from 'vuedraggable'
import KanbanCard from './KanbanCard.vue'
import { useKanbanStore } from '../stores/kanban'

const props = defineProps<{
  column: Column,
  disableDrag?: boolean
}>()

const kanbanStore = useKanbanStore()

const columnCards = computed({
  get: () => props.column.cards,
  set: (newCards) => kanbanStore.updateColumnCards(props.column.name, newCards)
})

const deleteCard = (cardId: string) => {
  kanbanStore.deleteCard(props.column.name, cardId)
}
</script>