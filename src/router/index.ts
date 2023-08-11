import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/categories/:category',
      name: 'articles',
      component: () => import('../views/NewsPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: '/articles/:id',
      name: 'details',
      component: () => import('../views/NewsDetailsPage.vue')
    }
  ]
})

export default router
