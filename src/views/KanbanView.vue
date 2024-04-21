<script setup lang="ts">
import NewCardForm from '@/components/NewCardForm.vue'
import KanbanBoard from '../components/KanbanBoard.vue'
</script>
<template>
  <div class="min-h-screen" style="background-color: #f2b8b4">
    <div class="bg-white p-4">
      <img src="../assets/images/fflogo.png" alt="Fysiofresh Logo" class="h-14 mx-auto" />
    </div>

    <div class="flex flex-col items-center justify-start p-4">
      <h1 class="font-bold h-10">Kanban Board</h1>
      <NewCardForm />
      <KanbanBoard />
    </div>
  </div>
</template>
