import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacto from '../views/Contacto.vue'
import UserProfile from '../views/UserProfile.vue'

const routes = [ 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/users',
    name: 'Users',
    component: function () {
      return import('../views/UsersView.vue')
    },
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
