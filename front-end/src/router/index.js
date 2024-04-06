import { createRouter, createWebHistory } from 'vue-router';
import CycleMainPageView from '../views/CycleMainPageView.vue';
import SleepCycleView from '../views/SleepCycleView.vue';
import SignUpView from "../views/SignUpView.vue";
import MainPageView from "../views/MainPageView.vue";
import ArticlesView from "../views/ArticlesPageView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPageView
    },
    {
      path: '/cycle-main',
      name: 'SleepCycleMain',
      component: CycleMainPageView,
    },
    {
      path: '/cycle',
      name: 'SleepCycle',
      component: SleepCycleView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView
    },
    {
      path: "/articles",
      name: "articles",
      component: ArticlesView
    }
  ]
})

export default router
