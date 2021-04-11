import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
<<<<<<< HEAD
import Contacto from '../views/Contacto.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import ForgotPassword from '../views/ForgotPassword.vue'


import NewMessage from '@/pages/NewMessage.vue'
import UserAdmin from '@/pages/UserAdmin.vue'
import Profile from "@/pages/Profile.vue";
import ListMessage from '@/pages/ListMessage.vue'
=======
import UsersView from '../views/UsersView.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ListMessage from '../views/ListMessage.vue'
import NewMessage from '../views/NewMessage.vue'
import NotFound from '../views/NotFound.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import UserAdmin from '../views/UserAdmin.vue'
import UserProfile from '../views/UserProfile.vue'
import Muro from '../views/Muro.vue'
import Contact from '../views/Contact.vue'
>>>>>>> origin/backend-crud

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
    path: '/UsersView',
    name: 'UsersView',
    component: UsersView
  },
  {
<<<<<<< HEAD
    path: '/users',
    name: 'Users',
    component: function () {
      return import('../views/UsersView.vue')
    },
=======
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
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
    path: '/NotFound',
    name: 'NotFound',
    component: NotFound
>>>>>>> origin/backend-crud
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
<<<<<<< HEAD
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
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
 
=======
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/UsersView',
    name: 'UsersView',
    component: UsersView
    
  },
  {
    path: '/UserAdmin',
    name: 'UserAdmin',
    component: UserAdmin
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/Muro',
    name: 'Muro',
    component: Muro
    
  },
>>>>>>> origin/backend-crud

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
