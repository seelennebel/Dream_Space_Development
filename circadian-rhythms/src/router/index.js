import { createRouter, createWebHistory } from 'vue-router'
import SleepCycleView from '../views/SleepCycleView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SleepCycle',
      component: SleepCycleView
    }
  ]
})

export default router
