import { createRouter, createWebHistory } from 'vue-router'
import KanbanView from '@/views/KanbanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'KanbanBoard',
      component: KanbanView
    }
  ]
})

export default router
