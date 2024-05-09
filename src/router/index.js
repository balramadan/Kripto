import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EncryptView from '../views/EncryptView.vue'
import DecryptView from '../views/DecryptView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'Encrypt',
      component: EncryptView
    },
    {
      path: '/de',
      name: 'Decrypt',
      component: DecryptView
    }
  ]
})

export default router
