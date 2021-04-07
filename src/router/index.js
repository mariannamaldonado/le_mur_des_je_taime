import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacto from '../views/Contacto.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import UsersView from '../views/UsersView.vue'



import NewMessage from '../views/NewMessage.vue'
import UserAdmin from '../views/UserAdmin.vue'
import ListMessage from '../views/ListMessage.vue'

import Profile from "@/pages/Profile.vue";

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
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/UsersView',
    name: 'UsersView',
    component: UsersView
  },
  
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/ListMessage',
    name: 'ListMessage',
    component: ListMessage
  },
  {
    path: '/NewMessage',
    name: 'NewMessage',
    component: NewMessage
  },

  {
    path: '/UserAdmin',
    name: 'UserAdmin',
    component: UserAdmin
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
});

export default router
