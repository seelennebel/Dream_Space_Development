import { createRouter, createWebHistory } from 'vue-router';
import CycleMainPageView from '../views/CycleMainPageView.vue';
import SleepCycleView from '../views/SleepCycleView.vue';
import SignUpView from "../views/SignUpView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SleepCycleMainPage',
      component: CycleMainPageView
    },
    {
      path: '/cycle',
      name: 'SleepCycle',
      component: SleepCycleView
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView
    }
  ]
})

export default router
