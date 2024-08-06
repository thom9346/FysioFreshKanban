<template>
  <div
    class="rounded-md shadow p-4 border border-gray-200 hover:bg-blue-50 relative"
    style="background-color: #fff8e7"
  >
    <button
      @click="deleteCard"
      class="absolute top-1 right-1 text-gray-500 hover:text-red-500"
    >
      &#x2715;
    </button>
    <h3 class="text-md font-semibold break-all">{{ card.title }}</h3>
    <p class="text-sm text-gray-600 break-words">{{ card.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { Card } from '../stores/kanban'

const props = defineProps<{
  card: Card
}>()

const emit = defineEmits(['delete'])

const deleteCard = () => {
  emit('delete', props.card.id)
}
</script>