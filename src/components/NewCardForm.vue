<template>
  <div class="p-4 md:p-6 rounded-lg shadow-md" style="background-color: #fbf0ef">
    <form @submit.prevent="addNewCard" class="flex flex-col md:flex-row items-end gap-4">
      <div class="flex flex-col flex-1 mb-4 md:mb-0">
        <label for="title" class="text-sm font-medium text-gray-700">Title</label>
        <input
          id="title"
          v-model="newCardTitle"
          type="text"
          placeholder="Enter title"
          class="mt-1 border p-2 rounded"
          style="background-color: #fffcfc"
        />
      </div>
      <div class="flex flex-col flex-1 mb-4 md:mb-0">
        <label for="description" class="text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          v-model="newCardDescription"
          placeholder="Enter description"
          class="mt-1 border p-2 rounded resize-none"
          style="background-color: #fffcfc"
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-maroon-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-maroon-700 focus:outline-none focus:ring focus:ring-maroon-500 focus:ring-opacity-50"
      >
        Add Card
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useKanbanStore } from '../stores/kanban'

const newCardTitle = ref('')
const newCardDescription = ref('')
const kanbanStore = useKanbanStore()

const addNewCard = () => {
  if (!newCardTitle.value.trim() || !newCardDescription.value.trim()) {
    alert('Please fill in both title and description.')
    return
  }

  kanbanStore.addCard('Todo', newCardTitle.value, newCardDescription.value)

  newCardTitle.value = ''
  newCardDescription.value = ''
}
</script>
