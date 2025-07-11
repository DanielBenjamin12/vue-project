import Contador from '@/modules/contador/components/Contador.vue'
import ListaDeTareas from '@/modules/ListaDeTarea/components/ListaDeTareas.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },

    {
      path:'/contador',
      name:'Contador',
      component: Contador
    },
    {
      path:'/lista-de-tareas',
      name:'Lista de tareas',
      component: ListaDeTareas
    }
  ],
})

export default router
