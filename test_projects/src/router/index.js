import { createRouter, createWebHistory } from 'vue-router'
const lazyLoad = (componentPath) => {
  return () => 
    import(`@/views/${componentPath}.vue`)
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/home.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: lazyLoad("login")
    },
    {
      path: '/register',
      name: 'register',
      component: lazyLoad("register")
    }
  ]
})

export default router
