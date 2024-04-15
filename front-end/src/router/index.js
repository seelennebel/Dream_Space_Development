import { createRouter, createWebHistory } from "vue-router";

import CycleMainPageView from "../views/CycleMainPageView.vue";
import SleepCycleView from "../views/SleepCycleView.vue";
import MainPageView from "../views/MainPageView.vue";
import ArticlesView from "../views/ArticlesPageView.vue";
import SupportView from '../views/SupportView.vue';
import SleepTracker from "@/views/sleeptracker.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPageView
    },
    {
      path: "/cycle-main",
      name: "SleepCycleMain",
      component: CycleMainPageView,
    },
    {
      path: "/cycle",
      name: "SleepCycle",
      component: SleepCycleView,
    },
    {
      path: "/articles",
      name: "articles",
      component: ArticlesView
    },
    {
      path: "/support",
      name: "support",
      component: SupportView
    },
    {
      path: "/sleeptracker",
      name: "sleeptracker",
      component: SleepTracker
    }
  ]
});

export default router;