<script setup lang="ts">
import NewCardForm from '@/components/NewCardForm.vue'
import KanbanBoard from '../components/KanbanBoard.vue'
</script>

<template>
  <main class="flex flex-col items-center justify-start p-4">
    <img src="../assets/images/fflogo.png" alt="Vue Logo" class="mx-auto block" />
    <NewCardForm />
    <KanbanBoard />
  </main>
</template>
