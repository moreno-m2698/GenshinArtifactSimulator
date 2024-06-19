import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/pages/HomeView.vue'
import GameSimulatorIndex from '../views/gameSimulator/pages/GameSimulatorIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GameSimulatorIndex
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/home/pages/AboutView.vue')
    }
  ]
})

export default router
