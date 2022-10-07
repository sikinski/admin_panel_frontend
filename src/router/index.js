import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import StatView from "../views/StatView.vue";

import ProjectsITView from "../views/ProjectsITView.vue";
import ArbitrazView from "../views/ArbitrazView";
import TGChannelsView from "../views/TGChannelsView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
    redirect: "/projects/IT",
    children: [
      {
        path: "IT",
        name: "IT",
        component: ProjectsITView,
      },
      {
        path: "arbitraz",
        name: "Arbitraz",
        component: ArbitrazView,
      },
      {
        path: "tg",
        name: "Telegram Channels",
        component: TGChannelsView,
      },
    ],
  },
  {
    path: "/stat",
    name: "Statistics",
    component: StatView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
