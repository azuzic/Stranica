import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/main',
    name: '/main',
    component: () => import("../views/MainPage.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
