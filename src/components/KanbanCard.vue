<template>
  <div class="bg-white rounded-md shadow p-4 border border-gray-200 hover:bg-blue-50">
    <h3 class="text-md font-semibold break-all">{{ card.title }}</h3>
    <p class="text-sm text-gray-600 break-words">{{ card.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Card } from '../stores/kanban'

defineProps<{
  card: Card
}>()
</script>
