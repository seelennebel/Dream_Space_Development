import { createRouter, createWebHistory } from 'vue-router';

import CycleMainPageView from '../views/CycleMainPageView.vue';
import SleepCycleView from '../views/SleepCycleView.vue';
import LogInView from "../views/LogInView.vue";
import MainPageView from "../views/MainPageView.vue";
import ArticlesView from "../views/ArticlesPageView.vue";
import SignUpView from '..//views/SignUpView.vue';
import SupportView from '../views/SupportView.vue';
import sleepTracker from '../views/sleeptracker.vue';


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
      path: "/login",
      name: "login",
      component: LogInView
    },
    {
      path: "/articles",
      name: "articles",
      component: ArticlesView
    },
    {
      path: "/signup_page",
      name: "signup",
      component: SignUpView
    },
    {
      path: "/support",
      name: "support",
      component: SupportView
    },
    {
      path: "/sleeptracker",
      name: "sleeptracker",
      component: sleepTracker
    }
  ]
})

export default router
