import { createRouter, createWebHistory } from 'vue-router'
const lazyLoad = componentPath => {
  return () => 
import (`../views/${componentPath}.vue`)
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ("@/views/home.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: () => import ("@/views/login.vue")
    },
    {
      path: '/register',
      name: 'register',
      component: () => import ("@/views/register.vue")
    }
  ]
})

export default router
